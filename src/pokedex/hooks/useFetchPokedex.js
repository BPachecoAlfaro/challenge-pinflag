import { useEffect, useState } from "react";
import { getPokemonData } from "../helpers/getPokemonData";

export const useFetchPokedex = (id) => {

    const [pokemonData, setPokemonData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchData = async () => {
        try {
            const data = await getPokemonData(id);
            setPokemonData(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {

        fetchData();
        console.log('useEffect from useFetchPokedex')
    }, []);

    return {
        pokemonData,
        isLoading,
    };
};