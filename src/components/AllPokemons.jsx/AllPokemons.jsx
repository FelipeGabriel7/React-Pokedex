import React from "react";
import { PokCard } from "../PokeCard/PokeCard";
import "./AllPokemons.css";

export class AllPokemons extends React.Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
    this.handleClickData = this.handleClickData.bind(this);
    this.state = {
      pokemons: [],
      limit: 8,
    };
  }

  fetchData() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=" + this.state.limit)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          pokemons: res.results,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleClickData() {
    this.setState({
      limit: this.state.limit + 8,
    });

    if (this.state.limit == 151) {
      return this.setState({
        limit: 151,
      });
    }

    this.fetchData();
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { pokemons } = this.state;

    return (
      <>
        <div className="pokemon-container">
          {pokemons &&
            pokemons.map((poke , id) => (
              <>
                <PokCard key={id} name={poke.name} url={poke.url} />
              </>
            ))}
        </div>

        {this.state.limit <= 157 && (
          <div className="button-container">
            <button className="button-loading" onClick={this.handleClickData}>
              {" "}
              Carregar mais Pokemons{" "}
            </button>
          </div>
        )}

        {this.state.limit > 157 && <span> </span>}
      </>
    );
  }
}
