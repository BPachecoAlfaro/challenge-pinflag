import { useEffect, useState } from 'react'
import { Loading } from '../components/Loading'
import { getPokemonList } from '../helpers/getPokemonList'
import { PokemonGrid } from '../components/pokemonGrid'


export const PokemonGridPage = () => {
  
  const [pokemonList, setPokemonList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [favoriteIsActive, setFavoriteIsActive] = useState(false)

  const favorites = JSON.parse(localStorage.getItem('pokemons'))

  const handleToggleFavorites = () => {
    if (favorites.length === 0) return
    setFavoriteIsActive(true)
    setPokemonList(favorites)
  }

  const handleReset = async() => {
    setFavoriteIsActive(false)
    fetchData()
  }
    
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const pokemonList = await getPokemonList();
      setPokemonList(pokemonList);
    } catch (error) {
        console.error("Error fetching Pokemon data:", error);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
    <div className='bg-slate-100 container grid grid-cols-2 items-center gap-2 p-4'>
      <div className='bg-blue-400 container mx-auto px-4'>Search</div>
      {
        favoriteIsActive ? 
        (<button onClick={ handleReset } className='bg-blue-500'>Back</button>) :
        (<button disabled={favorites.length === 0} onClick={ handleToggleFavorites } className='bg-green-500 disabled:bg-white'>Favoritos</button>)
      }
    </div>
      {
        isLoading ? <Loading/> : (<PokemonGrid pokemonList={ pokemonList }/>)
      }
    </>
  )
}
