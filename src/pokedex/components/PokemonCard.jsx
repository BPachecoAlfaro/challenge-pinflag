
import { useContext, useEffect, useState } from 'react'
import { colorByType } from "../helpers/colorByType"
import { useNavigate } from 'react-router-dom'
import { SelectedPokemonContext } from '../context/SelectedPokemonContext'

export const PokemonCard = (props) => {

  const { setSelectedPokemon } = useContext( SelectedPokemonContext )
  const [isFavorite, setIsFavorite] = useState(JSON.parse(localStorage.getItem('pokemons')).includes( props.name ))
  const navigate = useNavigate()

  const favorites = JSON.parse(localStorage.getItem('pokemons'))

  let types = []
  const getPokemonTypes = (() => {
    props.types.map((e) => {
      types.push(e.type.name)
    })
  })();

  const handleClickOnPokemon = () => {
    setSelectedPokemon( props.id )
    navigate("/pokedex")
  }

  const handleClickToggleFavorite = () => {
    if ( favorites.includes(props.name) ) {
      let newFavorites = favorites
      let index = newFavorites.indexOf(props.name);
      newFavorites.splice(index, 1)
      localStorage.setItem('pokemons', JSON.stringify(newFavorites))
    } else {
      let newFavorites = favorites
      newFavorites.push( props.name )
      localStorage.setItem('pokemons', JSON.stringify(newFavorites))
    }
  }

  const clickFavorite = () => {
    setIsFavorite( !isFavorite )
    handleClickToggleFavorite()
  }

  useEffect(() => {

  },[isFavorite])


  return (
    <>
    <div  className='w-auto aspect-[5/8] grid rounded-[1rem] mt-4 drop-shadow-xl'>
      <button onClick={ clickFavorite } className="absolute top-0 right-0 m-2">
        <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  className={ isFavorite ? 'fill-yellow-500 stroke-2' : "stroke-2"}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
      </button>
      <img  onClick={handleClickOnPokemon} className='bg-slate-100 rounded-[1rem] h-auto w-auto' src={props.sprite}/>
      <p className='text-center font-medium'>#{props.id}</p>
      <h5 className='text-center font-medium capitalize'>{props.name}</h5>
    <div className='text-center flex flex-row gap-1 justify-center mx-1 mb-2'>

      <div className={`${colorByType[types[0]]} w-full rounded-[1rem] grid`}>
        <span className='text-xs italic font-medium text-center my-auto'>{types[0]}</span>
          </div>
          {
            types[1] && (
            <div className={`${colorByType[types[1]]} w-full rounded-[1rem] grid`}>
              <span className='text-xs italic font-medium text-center my-auto'>{types[1]}</span>
            </div>
            )
          }
        </div>

    </div>
    </>
  )
}