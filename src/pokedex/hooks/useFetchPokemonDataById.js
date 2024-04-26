import { useEffect, useState } from "react";
import { getPokemonData } from "../helpers/getPokemonData";

export const useFetchPokemonDataById = ( args ) => {

    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchData = async () => {
        try {
            const dataArray = await Promise.all(args.map(async (e) => {
                const data = await getPokemonData(e);
                return data;
            }));
            setPokemonData(dataArray);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        }
    };
    
    useEffect(() => {
        fetchData();
        console.log('useEffect from useFetchPokemonDataById')
    }, []);

    return {
        pokemonData,
        isLoading,
    };
};