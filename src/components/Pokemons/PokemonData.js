import React from "react";
import '../styles/PokemonData.css';

const PokemonData = ({ data }) => {
   const { id, name, sprites, types, base_experience, height, weight } = data;
   return (
      <div className="container">
         <h2 className="pokemon-name">{name}</h2>
         <img className="pokemon-images" src={sprites.front_default} alt="Pokemons" />
         <p className="pokemon-type">
            Type: <span class="pokemon-info">{types[0].type.name}</span>
         </p>
         <table className="pokemon-table">
            <tbody>
               <tr>
                  <td className="pokemon-row">{id}</td>
                  <td className="pokemon-row">{base_experience}</td>
               </tr>
               <tr>
                  <th className="pokemon-head">PokeID</th>
                  <th className="pokemon-head">Base XP</th>
               </tr>
               <tr>
                  <td className="pokemon-row">{height}</td>
                  <td className="pokemon-row">{weight}</td>
               </tr>
               <tr>
                  <th className="pokemon-head">Height</th>
                  <th className="pokemon-head">Weight</th>
               </tr>
            </tbody>
         </table>
      </div>
   );
};

export default PokemonData;