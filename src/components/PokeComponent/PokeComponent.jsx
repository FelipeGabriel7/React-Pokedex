import React from "react";
import "./PokeComponent.css";

export class PokeComponent extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <>
        <div className="container">
          <div className="container-pokemon">


            {posts && (
              <div className="pokemon-infos">
                 
                <h2 className="pokemon-text">
                  {" "}
                  {posts.name} - {posts.id}{" "}
                </h2>

                {posts.sprites && (
                  <img
                    className="pokemon-image"
                    src={posts.sprites.front_default}
                    alt="image-pokemon"
                  />
                )}

                <div className="stats-pokemon">

                  <span className="life stats"> {posts.stats[0].base_stat} - HP  </span>
                  <span className="attack stats"> {posts.stats[1].base_stat} - ATK </span>
                  <span className="defense stats"> {posts.stats[2].base_stat} - DEF  </span>


                </div>
              </div>
            )}
          </div>
          <div className="pokeball"></div>
        </div>
      </>
    );
  }
}
