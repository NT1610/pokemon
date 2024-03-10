import React, { useState } from "react";
import PokemonList from "./PokemonList";
import "./pokemon.css";

const PokemonColection = (props) => {
    const { pokemons, viewDetail, setDetail } = props;

    const selectPokemon = (id) => {
        if (!viewDetail.isOpened) {
            setDetail({
                id: id,
                isOpened: true,
            });
        }
    };

    return (
        <>
            <section
                className={
                    viewDetail.isOpened
                        ? "collection-container-active"
                        : "collection-container"
                }
            >
                {viewDetail.isOpened ? (
                    <div className="overlay"></div>
                ) : (
                    <div className=""></div>
                )}
                {pokemons.map((pokemon) => {
                    return (
                        <div onClick={() => selectPokemon(pokemon.id)} key={pokemon.id}>
                            <PokemonList
                                viewDetail={viewDetail}
                                setDetail={setDetail}
                                name={pokemon.name}
                                id={pokemon.id}
                                abilities={pokemon.abilities}
                                image={pokemon.sprites.front_default}
                            />
                        </div>
                    );
                })}
            </section>
        </>
    );
};

export default PokemonColection;
