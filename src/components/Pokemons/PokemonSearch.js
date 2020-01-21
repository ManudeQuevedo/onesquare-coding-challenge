import React from 'react';
import '../styles/PokemonSearch.css';

const PokemonSearch = ({ onSubmit, onValueChange, inputValue, buttonText }) => (
   <form onSubmit={onSubmit}>
      <input class="pokemon-input" type="text" onChange={onValueChange} value={inputValue} />
      <button class="pokemon-button" type="submit">{buttonText}</button>
   </form>
);

export default PokemonSearch;