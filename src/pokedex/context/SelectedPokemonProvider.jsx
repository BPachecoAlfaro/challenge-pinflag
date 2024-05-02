import { useState } from "react"
import { SelectedPokemonContext } from "./SelectedPokemonContext"


export const SelectedPokemonProvider = ({ children }) => {

    const [ selectedPokemon, setSelectedPokemon ] = useState(1)

  return (
    <SelectedPokemonContext.Provider value={ { selectedPokemon, setSelectedPokemon } }>
        { children }
    </SelectedPokemonContext.Provider>
  )
}
