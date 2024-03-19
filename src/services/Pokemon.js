import axiosInstance from "./customize-axios";

const fetchAllPokemon = (page) => {
    return axiosInstance.get(`pokemon?limit=10&offset=${page}`)
}
const fetchPokemon = (name) => {

    return axiosInstance.get(`pokemon/${name}`)
}
const generationPokemon = () => {
    return axiosInstance.get(`generation/`)
}
export { fetchAllPokemon, fetchPokemon, generationPokemon };