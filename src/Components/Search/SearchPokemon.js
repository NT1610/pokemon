import React, { useState } from "react";
import { fetchPokemon } from '../../services/Pokemon.js';
import _ from 'lodash';
import PokemonList from "../Home/PokemonList.js";
const SearchPokemon = () => {
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    id: "",
    abilities: "",
    image: "",
  });



  const searchPokemon = async () => {
    let res = await fetchPokemon(pokemonName);

    console.log(res);
    setPokemon({
      name: pokemonName,
      id: res.data.id,
      abilities: res.data.abilities,
      image: res.data.sprites.front_default,
    });
    setPokemonChosen(true);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-6">
        <input
          className="bg-white border border-gray-300 rounded-md py-2 px-10 placeholder-gray-400 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search pokemon by name..."
          onChange={(event) => setPokemonName(event.target.value)}
        />

        <button onClick={searchPokemon}
          className="bg-white border">Search Pokemon
        </button>

        <div>{!pokemonChosen ? (<h1>Please choose a Pokemon</h1>
        ) : (
          <>
            <div className="detail-info">
              <img src={pokemon.image} alt="pokemon" className='detail-image' />
              <p className="detail-name">{pokemonName}</p>
            </div>

            <div className="detail-skill">
              {pokemon.abilities?.map((ab, index) => {
                // console.log(ab)
                return <div key={index} className="">{ab.ability.name}</div>;
              })}
            </div>
          </>

        )}</div>
      </div>

    </>
  );
};

export default SearchPokemon;
