import { useState, useEffect, useContext } from 'react'
import { colorByType } from "../helpers/colorByType"
import { useFetchPokedex } from '../hooks/useFetchPokedex'
import { getPokemonData } from '../helpers/getPokemonData'
import { Pokedex } from '../components/Pokedex'
import { SelectedPokemonContext } from '../context/SelectedPokemonContext'


export const PokedexPage = () => {

  const { selectedPokemon } = useContext( SelectedPokemonContext )

  return (
    <>
      <Pokedex pokemon={selectedPokemon}/>
    </>
  )
}
