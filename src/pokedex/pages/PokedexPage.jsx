import { useParams } from 'react-router-dom'
import { Pokedex } from '../components/pokedex'
import { useEffect, useState } from 'react'


export const PokedexPage = () => {

  const { id } = useParams()
  const [ idPokemon, setIdPokemon ] = useState()
  // const [ favoritesPokemon, setFavoritesPokemon ] = useState([])

  useEffect(() => {
    setIdPokemon(id)
    // setFavoritesPokemon(JSON.parse(localStorage.getItem('pokemons')))
  },[idPokemon])

  return (
    <>
      <Pokedex id={ id }/>
    </>
  )
}
