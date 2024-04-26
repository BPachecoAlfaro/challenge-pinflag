import { useEffect, useState } from "react";
import { getPokemons } from "../helpers/getPokemons";


export const useFetchPokemonData = (url) => {
    
    const [ pokemons, setPokemons ] = useState([]);
    const [ nextPage, setNextPage] = useState(null)
    const [ prevPage, setPrevPage] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true);

    const getData = async () => {
        const data = await getPokemons(url)
        setPokemons(data.dataPokemons)
        setNextPage(data.nextPage)
        setPrevPage(data.prevPage)
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, [url])

    return { 
        pokemons,
        isLoading,
        nextPage,
        prevPage,
    };
}