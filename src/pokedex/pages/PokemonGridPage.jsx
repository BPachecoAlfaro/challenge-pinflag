import { useState } from 'react'
import { PokemonCard } from '../components/PokemonCard'
import { Loading } from '../components/Loading'
import { useNavigate } from 'react-router-dom';
import { useFetchPokemonDataById } from '../hooks/useFetchPokemonDataById';
import { useGetPokemonNames } from '../helpers/useGetPokemonNames';

export const PokemonGridPage = () => {

  const [ url, setUrl ] = useState('https://pokeapi.co/api/v2/pokemon/?limit=30offset=0')
  const { pokemonNames, nextPage, prevPage, isLoading} = useGetPokemonNames(url)
  const { pokemonData } = useFetchPokemonDataById(pokemonNames)


  const navigate = useNavigate();

  const handleNextPagination = () => {
    setUrl(nextPage)
  }

  const handlePrevPagination = () => {
    setUrl(prevPage)
  }

  const handleNavigateToPokedex = () => {
    console.log(pokemons[0])
    navigate("/pokedex")
  }

  return (
    <>
      <div className='bg-blue-400 container mx-auto px-4'>PokemonGridPage</div>
      {
        isLoading && <Loading/> 
      }
      <div className='bg-slate-100 container mx-auto px-4 grid grid-cols-3 gap-4'>
        {
          pokemonData.map(pokemon => (
            <PokemonCard 
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              sprite={pokemon.sprites.other.home.front_default}
              types={pokemon.types}
            />
          ))
        }
        
      </div>
      <div className='bg-slate-100 grid grid-cols-3 items-center gap-2 p-4'>
        <button disabled={!prevPage} onClick={handlePrevPagination} className='bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-2xl'>prev page</button>
        <button onClick={handleNavigateToPokedex} className='bg-green-500'>Pokedex</button>
        <button onClick={handleNextPagination} className='bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-2xl'>next page</button>
      </div>
    </>
  )
}
