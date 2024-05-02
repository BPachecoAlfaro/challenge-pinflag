import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pokedex/pages/LandingPage'
import { PokemonGridPage } from '../pokedex/pages/PokemonGridPage'
import { PokedexPage } from '../pokedex/pages/PokedexPage'


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='pokemongrid' element={<PokemonGridPage/>}/>
            <Route path='/pokedex' element={<PokedexPage/>}/>
        </Routes>
    </>
  )
}
