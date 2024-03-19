import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchAllPokemon, fetchPokemon, generationPokemon } from '../../services/Pokemon';
import ReactPaginate from 'react-paginate';
import PokemonColection from './PokemonColection';
// import Select from 'react-select'


const NextPage = () => {
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [viewDetail, setDetail] = useState({
        id: 0,
        isOpened: false,
    });
    const [selectedGene, setSelectedGene] = useState([]);

    const getPokemon = async (page) => {

        const res = await fetchAllPokemon(page);
        // console.log('check api: ', res)
        setNextUrl(res.data);

        // Xét 10 phần tử trên 1 trang
        setTotalPages(Math.ceil(res.data.count / 20));

        res.data.results.forEach(async (pokemon) => {
            const poke = await fetchPokemon(pokemon.name);
            setPokemons((p) => [...p, poke.data]);
        });
    };


    useEffect(() => {
        getPokemon(currentPage);
    }, []);


    const nextPage = async (page) => {
        // console.log(page.selected * 20 + 20)
        const locationPokemon = page.selected * 20 + 20
        setPokemons([])
        getPokemon(locationPokemon)
        setCurrentPage(locationPokemon)
    };

    const getGenPokemon = async () => {
        let res = await generationPokemon();
        const generationNames = res.data.results.map(generation => generation.name)
        // console.log(generationNames)

        setSelectedGene(generationNames);
    };


    return (
        <>
            <div >
                Choose generation
                <select onClick={getGenPokemon} >
                    {selectedGene.map((item) => (
                        <option key={item} value={item}>{item}</option>

                    ))}

                </select>
            </div>
            <PokemonColection
                pokemons={pokemons}
                viewDetail={viewDetail}
                setDetail={setDetail}
            />
            <ReactPaginate className="flex overflow-x-auto sm:justify-center gap-3 text-zinc-50"
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
