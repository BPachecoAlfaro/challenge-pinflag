import { useState, useEffect } from 'react'
import { PokemonCard } from './PokemonCard'
import { getPokemonData } from '../helpers/getPokemonData';
import { Loading } from './Loading'

export const PokemonGrid = ( props ) => {

    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [pagination, setPagination] = useState(0)
    

    let pokemonsToRender = [];
    
    const slicePokemonList = (array) => {
        for (let i = 0; i < array.length; i += 30) {
            pokemonsToRender.push(array.slice(i, i + 30));
        }
    }
    slicePokemonList(props.pokemonList)
 
    if ( pagination >= pokemonsToRender.length ) setPagination(0)

    const handleNextPagination = () => {
        if ( pagination === pokemonsToRender.length -1 ) return
        setPagination(a => a + 1)
    }

    const handlePrevPagination = () => {
        if ( pagination === 0) return;
        setPagination(a => a - 1);
    }
    
    const fetchData = async (array) => {
        setLoading(true)
        try {
        const dataArray = await Promise.all(array[pagination].map(async (e) => {
              const data = await getPokemonData(e);
              return data;
        }));
            setPokemonData(dataArray);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchData(pokemonsToRender)
    }, [pagination, props.pokemonList, props.search]);

  return (
    <>
        <div className='bg-slate-100 container mx-auto px-4 grid grid-cols-3 gap-4'>
            {
                isLoading ? <Loading/> : (pokemonData.map(pokemon => (
                    <PokemonCard
                      key={pokemon.id}
                      id={pokemon.id}
                      name={pokemon.name}
                      sprite={pokemon.sprites.other.home.front_default}
                      types={pokemon.types}
                    />
                  )))
            }
        </div>
        <div className='bg-slate-100 grid grid-cols-3 items-center gap-2 p-4'>
            <button disabled={ pagination === 0 } onClick={handlePrevPagination} className='bg-green-500 hover:bg-green-700 disabled:bg-gray-500 px-4 py-2 rounded-2xl'>prev page</button>
            <p className='text-center'>{ `${pagination +1} / ${pokemonsToRender.length }` }</p>
            <button disabled={ pagination === pokemonsToRender.length -1 } onClick={handleNextPagination} className='bg-green-500 hover:bg-green-700 disabled:bg-gray-500 px-4 py-2 rounded-2xl'>next page</button>
        </div>
    </>
  )
}