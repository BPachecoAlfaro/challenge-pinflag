import { useState } from "react"
import { FavoritesPokemonContext } from './favoritesPokemonContext'


export const FavoritesPokemonProvider = ({ children }) => {

    const [ favoritesPokemon, setFavoritesPokemon ] = useState(() => {
      try {
          const item = localStorage.getItem('pokemons')
          return item ? JSON.parse(item) : []
      } catch (error) {
        console.log(error)
      }
    })

  const addFavoritePokemon = value => {
    try {
        setFavoritesPokemon( favoritesPokemon => [...favoritesPokemon, value] )
        localStorage.setItem('pokemons', JSON.stringify([...favoritesPokemon, value]))
    } catch (error) {
        console.error(error)
    }
  }

  const removeFavoritePokemon = value => {
    try {
      let newFavorites = favoritesPokemon
      let index = newFavorites.indexOf(value);
      newFavorites.splice(index, 1)
      setFavoritesPokemon( newFavorites )
      localStorage.setItem('pokemons', JSON.stringify(newFavorites))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <FavoritesPokemonContext.Provider value={ { favoritesPokemon, addFavoritePokemon, removeFavoritePokemon } }>
        { children }
    </FavoritesPokemonContext.Provider>
  )
}
