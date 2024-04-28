import { useState } from "react"
import { SelectedPokemonContext } from "./SelectedPokemonContext"


export const SelectedPokemonProvider = ({ children }) => {

    const [ getLocalStorage, setLocalStorage] = useState(localStorage.getItem())

  return (
    <SelectedPokemonContext.Provider value={ { selectedPokemon, setSelectedPokemon } }>
        { children }
    </SelectedPokemonContext.Provider>
  )
}
