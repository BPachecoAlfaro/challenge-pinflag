import { useState, useEffect } from "react";

export const useGetPokemonNames = (url) => {

    const [pokemonNames, setPokemonNames] = useState([]);
    const [nextPage, setNextPage] = useState('');
    const [prevPage, setPrevPage] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setNextPage(data.next);
                setPrevPage(data.previous);
                const pokemonNamesArray = data.results.map(pokemon => pokemon.name);
                setPokemonNames(pokemonNamesArray);
            } catch (error) {
                console.error("Error al obtener datos:", error);

            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
        console.log('useEffect from useGetPokemonNames')
    }, [url])

    return {
        pokemonNames,
        nextPage,
        prevPage,
        isLoading,
    };
};