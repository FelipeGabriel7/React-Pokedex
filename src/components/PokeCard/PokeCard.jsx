import React from "react";
import './PokeCard.css'

export class PokCard extends React.Component{

    constructor(props){
        super(props)
    }

 
    render(){

        const { name } = this.props

        return(
            <>

                <div className="pokemon-info">
                    <span className="pokemon-name"> {name}  </span>
                    <img className="image-pokemon" src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} />
                    <div className="btn-details">
                        <button className="button-pokemon"> Detalhes </button>
                    </div>
                </div>

            </>
        )
    }
}