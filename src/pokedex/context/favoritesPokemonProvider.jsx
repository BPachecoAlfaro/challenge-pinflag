import { useState } from "react"
import { FavoritesPokemonContext } from './favoritesPokemonContext'


export const FavoritesPokemonProvider = ({ children }) => {

    const [ favoritesPokemon, setFavoritesPokemon ] = useState()

  return (
    <FavoritesPokemonContext.Provider value={ { favoritesPokemon, setFavoritesPokemon } }>
        { children }
    </FavoritesPokemonContext.Provider>
  )
}
