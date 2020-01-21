import React, { useState } from 'react';
import './styles/App.css';
import Axios from 'axios';
import PokemonSearch from './Pokemons/PokemonSearch';
import PokemonLogo from './img/pokemon-logo.png';
import PokemonData from './Pokemons/PokemonData';


const App = () => {
  const [number, setNumber] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [frase, setFrase] = useState('Ingresa cualquier nombre de Pokemon');

  const getPokemon = async e => {
    e.preventDefault();

    const pokemonNumber = number.trim();
    if(!pokemonNumber) return;
    try {
      const resultado = await Axios(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      setPokemon(resultado.data);
    } catch (error) {
      setPokemon(null);
      setFrase('Pokemon no encontrado');
    }
    setNumber("");
  }

  return (
    <div className="main-container">
      <img class="logo" src={PokemonLogo} alt="Logo API Pokemon"/>
      <PokemonSearch
        onSubmit = {getPokemon}
        onValueChange = {e => setNumber(e.target.value)}
        inputValue = {number}
        buttonText = "Buscar"
      />
    <p className="text">{frase}</p>
    {pokemon && <PokemonData data={pokemon}/>}
    </div>
  )
}

export default App;
