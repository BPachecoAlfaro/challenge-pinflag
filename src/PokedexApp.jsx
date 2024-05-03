

import React from 'react'
import { AppRouter } from './router/AppRouter'
import { FavoritesPokemonProvider } from './pokedex/context/favoritesPokemonProvider'

export const PokedexApp = () => {
  return (
      <FavoritesPokemonProvider>
        <AppRouter/>
      </FavoritesPokemonProvider>
  )
}
