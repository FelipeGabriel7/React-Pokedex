import React from "react";

import { PokeComponent } from "./components/PokeComponent/PokeComponent";
import { PokeForm } from "./components/FormPokemon/PokeForm";
import { AllPokemons } from "./components/AllPokemons.jsx/AllPokemons";
import { Footer } from "./footer/Footer";

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.APIsearch = this.APIsearch.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);

    this.state = {
      posts: [],
      counter: 0,
      namePokemon: "",
      name: ''
    };
  }

  async APIsearch() {

    const nameP = this.state.namePokemon ? this.state.namePokemon : ''


    if(nameP !== '' || nameP !== undefined){
        const request = await fetch(
            "https://pokeapi.co/api/v2/pokemon" + ( nameP ? '/' + nameP : '/ditto' ) ,
            {
              method: "GET",
            }
          );
      
          const response = await request.json();
      
          try {
      
      
            this.setState({
              posts: response,
            });
          } catch (e) {
            console.log(e);
          }
    }else{
        return nameP
    }


  }

  componentDidMount() {
    this.APIsearch();
  }


  componentDidUpdate(prevProps , prevState){
    if(prevState.namePokemon !== this.state.namePokemon){
        this.APIsearch();
    }

  }


  handleUserName(e){

    e.preventDefault()
    this.setState({
        name: e.target.value
    })
    

  }

  handleClickSearch(e){

    e.preventDefault()

    this.setState({
        namePokemon: this.state.name
    })


  }

  render() {
    const { posts } = this.state;

    return (
        <section>
       
        <PokeForm handleClick={this.handleClickSearch} handleUser={this.handleUserName}/> 
       
        {this.state.namePokemon && (
           <PokeComponent posts={posts}/>
        )}

        {!this.state.namePokemon && (
            <span></span>
        )}
          

        <AllPokemons/> 
          
        <Footer/> 
        </section>
    );
  }
}
