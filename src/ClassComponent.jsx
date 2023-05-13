import { useEffect, useState } from "react";

import { PokeComponent } from "./components/PokeComponent/PokeComponent";
import { PokeForm } from "./components/FormPokemon/PokeForm";
import { Footer } from "./footer/Footer";
import { FinalPokemons } from "./components/AllPokemons/AllPokemons";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [namePokemon, setNamePokemon] = useState("");
  const [name, setName] = useState("");


  function handleUserName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleClickSearch(e) {
    e.preventDefault();
    setNamePokemon(name);
  }

   async function APIsearch() {
    const nameP = namePokemon ? namePokemon : "";

    if (nameP !== "" || nameP !== undefined) {
      const request = await fetch(
        "https://pokeapi.co/api/v2/pokemon" + (nameP ? "/" + nameP : "/ditto"),
        {
          method: "GET",
        }
      );

      const response = await request.json();

      try {
        setPosts(response)
      } catch (e) {
        console.log(e);
      }
    } else {
      return nameP;
    }
  }

  useEffect(() => {
    APIsearch()
  }, [])


  return (
    <>
      <section>
        <PokeForm
          handleClick={handleClickSearch}
          handleUser={handleUserName}
        />

        {namePokemon && <PokeComponent posts={posts} />}

        {!namePokemon && <span></span>}

        <FinalPokemons /> 

        <Footer />
      </section>
    </>
  );
};

// export class ClassComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.APIsearch = this.APIsearch.bind(this);
//     this.handleUserName = this.handleUserName.bind(this);
//     this.handleClickSearch = this.handleClickSearch.bind(this);

//     this.state = {
//       posts: [],
//       counter: 0,
//       namePokemon: "",
//       name: "",
//     };
//   }

//   async APIsearch() {
//     const nameP = this.state.namePokemon ? this.state.namePokemon : "";

//     if (nameP !== "" || nameP !== undefined) {
//       const request = await fetch(
//         "https://pokeapi.co/api/v2/pokemon" + (nameP ? "/" + nameP : "/ditto"),
//         {
//           method: "GET",
//         }
//       );

//       const response = await request.json();

//       try {
//         this.setState({
//           posts: response,
//         });
//       } catch (e) {
//         console.log(e);
//       }
//     } else {
//       return nameP;
//     }
//   }

//   componentDidMount() {
//     this.APIsearch();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.namePokemon !== this.state.namePokemon) {
//       this.APIsearch();
//     }
//   }

//   handleUserName(e) {
//     e.preventDefault();
//     this.setState({
//       name: e.target.value,
//     });
//   }

//   handleClickSearch(e) {
//     e.preventDefault();

//     this.setState({
//       namePokemon: this.state.name,
//     });
//   }

//   render() {
//     const { posts } = this.state;

//     return (
//       <section>
//         <PokeForm
//           handleClick={this.handleClickSearch}
//           handleUser={this.handleUserName}
//         />

//         {this.state.namePokemon && <PokeComponent posts={posts} />}

//         {!this.state.namePokemon && <span></span>}

//         <AllPokemons />

//         <Footer />
//       </section>
//     );
//   }
// }
