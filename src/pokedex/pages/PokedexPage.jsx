import { useParams } from 'react-router-dom'
import { Pokedex } from '../components/pokedex'


export const PokedexPage = () => {

  const { id } = useParams()

  return (
    <>
      <Pokedex id={ id }/>
    </>
  )
}
