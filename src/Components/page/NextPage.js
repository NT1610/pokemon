import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchAllPokemon, fetchPokemon } from '../../services/Pokemon';
import ReactPaginate from 'react-paginate';
import PokemonColection from './PokemonColection';



const NextPage = () => {
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [viewDetail, setDetail] = useState({
        id: 0,
        isOpened: false,
    });


    const getPokemon = async (page) => {

        const res = await fetchAllPokemon(page);
        console.log('check api: ', res)
        setNextUrl(res.data);

        // Xét 10 phần tử trên 1 trang
        setTotalPages(Math.ceil(res.data.count / 10));

        res.data.results.forEach(async (pokemon) => {
            const poke = await fetchPokemon(pokemon.name);
            setPokemons((p) => [...p, poke.data]);
        });
    };


    useEffect(() => {
        getPokemon(currentPage);
    }, []);


    const nextPage = async (page) => {
        console.log(page.selected * 10 + 10)
        const locationPokemon = page.selected * 10 + 10
        setPokemons([])
        getPokemon(locationPokemon)
        setCurrentPage(locationPokemon)
    };


    return (
        <>
            <PokemonColection
                pokemons={pokemons}
                viewDetail={viewDetail}
                setDetail={setDetail}
            />
            <ReactPaginate className="flex overflow-x-auto sm:justify-center gap-3  "
                breakLabel="..."
                nextLabel="next >"
                onPageChange={nextPage}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"
            />
        </>
    );
};

export default NextPage;
