import { useContext, useEffect, useState } from 'react'
import { PokemonGrid } from '../components/pokemonGrid'
import { pokemons} from '../const/pokemons'
import { FavoritesPokemonContext } from '../context/favoritesPokemonContext'


export const PokemonGridPage = () => {
  
  const [ pokemonList, setPokemonList ] = useState(pokemons);
  const [ favoriteIsActive, setFavoriteIsActive ] = useState(false);
  const [ searchFilter, setSearchFilter ] = useState('');
  const { favoritesPokemon } = useContext( FavoritesPokemonContext )


  const handleToggleFavorites = () => {
    if (favoritesPokemon.length === 0) return
    setFavoriteIsActive(true)
    setPokemonList(favoritesPokemon)
  }

  const handleReset = () => {
    setFavoriteIsActive(false)
    setPokemonList(pokemons)
  }

  const handleChangeSearch = () => {
    const value = event.target.value.toLowerCase();
    setSearchFilter(value);
  }

  useEffect(() => {

  }, [favoritesPokemon])

  return (
    <>
    <div className='bg-slate-100 container grid grid-cols-2 items-center gap-2 p-4'>
      <input placeholder='Search' onChange={ handleChangeSearch } className='bg-blue-400 container mx-auto px-4'/>
      {
        favoriteIsActive ? 
        (<button onClick={ handleReset } className='bg-blue-500'>Back</button>) :
        (<button onClick={ handleToggleFavorites } className='bg-green-500 disabled:bg-white'>Favoritos</button>)
      }
    </div>
    <PokemonGrid pokemonList={ pokemonList } search={ searchFilter } />
    </>
  )
}
