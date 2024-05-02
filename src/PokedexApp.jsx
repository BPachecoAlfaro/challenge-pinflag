

import React from 'react'
import { AppRouter } from './router/AppRouter'
import { SelectedPokemonProvider } from './pokedex/context/SelectedPokemonProvider'
import { FavoritesPokemonProvider } from './pokedex/context/favoritesPokemonProvider'

export const PokedexApp = () => {
  return (
    <SelectedPokemonProvider>
      <FavoritesPokemonProvider>
        <AppRouter/>
      </FavoritesPokemonProvider>
    </SelectedPokemonProvider>
  )
}
