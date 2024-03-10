import axiosInstance from "./customize-axios";

const fetchAllPokemon = (page) => {
    return axiosInstance.get(`pokemon?limit=10&offset=${page}`)
}
const fetchPokemon = (name) => {
    return axiosInstance.get(`pokemon/${name}`)
}
export {fetchAllPokemon, fetchPokemon};