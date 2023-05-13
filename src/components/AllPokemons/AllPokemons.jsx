import { useEffect, useState } from "react";
import { PokeCard } from '../PokeCard/PokeCard'
import "./AllPokemons.css";



export function FinalPokemons() {

  const[pokemons , setPokemons] = useState([]);
  const[limit , setLimit] = useState(8);


  function fetchData() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=" + limit)
      .then((res) => res.json())
      .then((res) => {
        setPokemons(res.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  function handleClickData() {
    
    setLimit((prevState) => prevState + 8)

    if (limit === 151) {
      return setLimit(151)
    }

    fetchData();
  }



  useEffect(() => {
    fetchData()
  } , [])



  return (
    <>
      <div className="pokemon-container">
        {pokemons &&
          pokemons.map((poke , id) => (
            <>
              <PokeCard key={id} name={poke.name} url={poke.url} />
            </>
          ))}
      </div>

      {limit <= 157 && (
        <div className="button-container">
          <button className="button-loading" onClick={handleClickData}>
            {" "}
            Carregar mais Pokemons{" "}
          </button>
        </div>
      )}

      {limit > 157 && <span> </span>}
    </>
  );
}

// export class AllPokemons extends React.Component {
//   constructor(props) {
//     super(props);

//     this.fetchData = this.fetchData.bind(this);
//     this.handleClickData = this.handleClickData.bind(this);
//     this.state = {
//       pokemons: [],
//       limit: 8,
//     };
//   }

//   fetchData() {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=" + this.state.limit)
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState({
//           pokemons: res.results,
//         });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   handleClickData() {
//     this.setState({
//       limit: this.state.limit + 8,
//     });

//     if (this.state.limit == 151) {
//       return this.setState({
//         limit: 151,
//       });
//     }

//     this.fetchData();
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   render() {
//     const { pokemons } = this.state;

//     return (
//       <>
//         <div className="pokemon-container">
//           {pokemons &&
//             pokemons.map((poke , id) => (
//               <>
//                 <PokeCard key={id} name={poke.name} url={poke.url} />
//               </>
//             ))}
//         </div>

//         {this.state.limit <= 157 && (
//           <div className="button-container">
//             <button className="button-loading" onClick={this.handleClickData}>
//               {" "}
//               Carregar mais Pokemons{" "}
//             </button>
//           </div>
//         )}

//         {this.state.limit > 157 && <span> </span>}
//       </>
//     );
//   }
// }
