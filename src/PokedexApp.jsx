

import React from 'react'
import { AppRouter } from './router/AppRouter'
import { SelectedPokemonProvider } from './pokedex/context/SelectedPokemonProvider'

export const PokedexApp = () => {
  return (
    <SelectedPokemonProvider>
      <AppRouter/>
    </SelectedPokemonProvider>
  )
}
