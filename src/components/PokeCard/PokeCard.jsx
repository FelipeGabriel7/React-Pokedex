import { useState } from "react";
import "./PokeCard.css";



export const PokeCard = ({ name }) =>{

  const[modal , setModal] = useState(false);
  const[pokemonInfos , setPokemonInfos] = useState([]);


  function handleDetails(name) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((res) => res.json())
      .then((res) => {
        setPokemonInfos(
           {...res}
        )
      })
      .catch((e) => console.log(e));

    handleOpenModal();
  }

  function handleOpenModal(){
    setModal((prevState) => !prevState)
  }

  return(

    <>
        <div className="pokemon-info">
          <span className="pokemon-name"> {name} </span>
          <img
            className="image-pokemon"
            src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          />
          <div className="btn-details">
            <button
              className="button-pokemon"
              onClick={() => handleDetails(name)}
            >
              {" "}
              Detalhes{" "}
            </button>
          </div>
        </div>

        {modal && (
          <div className="modal-info">
            <span
              className="close-modal"
              onClick={() => handleOpenModal()}
            >
              {" "}
              X{" "}
            </span>

            <section className="pokemon-container-card">

            <h1 className="information-pokemon-text">
                  {" "}
                  {pokemonInfos.name} - {pokemonInfos.id}{" "}
                </h1>


                {" "}
                <div className="types-pokemon">
                  {pokemonInfos.types &&
                    pokemonInfos.types.map((typeP) => (
                      <div className="pokemon-type" key={typeP.slot}>
                        <span className="type"> {typeP.type.name} </span>
                      </div>
                    ))}
                </div>

              <div className="sprite-pokemon">
                {pokemonInfos.sprites && (
                  <img
                    src={pokemonInfos.sprites.front_default}
                    alt={pokemonInfos.name}
                  />
                )}
              </div>
              <div className="information-pokemon">
               
                <div className="stats-pokemon">
                  {pokemonInfos.stats &&
                    pokemonInfos.stats.map((poke , id) => (
                      <span className="stats-pokemon-info" key={id}>
                        {" "}
                        {poke.base_stat} - {poke.stat.name}{" "}
                      </span>
                    ))}
                </div>
              </div>
            </section>
          </div>
        )}
      </>

  )


}

// export class PokCard extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleDetails = this.handleDetails.bind(this);
//     this.handleOpenModal = this.handleOpenModal.bind(this);

//     this.state = {
//       modal: false,
//       pokemonInfos: [],
//     };
//   }

//   handleDetails(name) {


//     fetch("https://pokeapi.co/api/v2/pokemon/" + name)
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState({
//           pokemonInfos: { ...res },
//         });
//       })
//       .catch((e) => console.log(e));

//     this.handleOpenModal();
//   }

//   handleOpenModal() {
//     this.setState({
//       modal: !this.state.modal,
//     });
//   }

//   render() {
//     const { name } = this.props;
//     const { modal, pokemonInfos } = this.state;

   

//     return (
//       <>
//         <div className="pokemon-info">
//           <span className="pokemon-name"> {name} </span>
//           <img
//             className="image-pokemon"
//             src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
//           />
//           <div className="btn-details">
//             <button
//               className="button-pokemon"
//               onClick={() => this.handleDetails(name)}
//             >
//               {" "}
//               Detalhes{" "}
//             </button>
//           </div>
//         </div>

//         {modal && (
//           <div className="modal-info">
//             <span
//               className="close-modal"
//               onClick={() => this.handleOpenModal()}
//             >
//               {" "}
//               X{" "}
//             </span>

//             <section className="pokemon-container-card">

//             <h1 className="information-pokemon-text">
//                   {" "}
//                   {pokemonInfos.name} - {pokemonInfos.id}{" "}
//                 </h1>


//                 {" "}
//                 <div className="types-pokemon">
//                   {pokemonInfos.types &&
//                     pokemonInfos.types.map((typeP) => (
//                       <div className="pokemon-type" key={typeP.slot}>
//                         <span className="type"> {typeP.type.name} </span>
//                       </div>
//                     ))}
//                 </div>

//               <div className="sprite-pokemon">
//                 {pokemonInfos.sprites && (
//                   <img
//                     src={pokemonInfos.sprites.front_default}
//                     alt={pokemonInfos.name}
//                   />
//                 )}
//               </div>
//               <div className="information-pokemon">
               
//                 <div className="stats-pokemon">
//                   {pokemonInfos.stats &&
//                     pokemonInfos.stats.map((poke , id) => (
//                       <span className="stats-pokemon-info" key={id}>
//                         {" "}
//                         {poke.base_stat} - {poke.stat.name}{" "}
//                       </span>
//                     ))}
//                 </div>
//               </div>
//             </section>
//           </div>
//         )}
//       </>
//     );
//   }
// }
