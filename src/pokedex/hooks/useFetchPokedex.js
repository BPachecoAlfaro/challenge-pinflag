import { useEffect, useState } from "react";
import { getPokemonData } from "../helpers/getPokemonData";

export const useFetchPokedex = (id) => {

    const [pokemonData2, setPokemonData2] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchData = async () => {
        try {
            const data = await getPokemonData(id);
            setPokemonData2(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {

        fetchData();
        console.log('useEffect from useFetchPokedex')
    }, [id]);

    return {
        pokemonData2,
        isLoading,
    };
};