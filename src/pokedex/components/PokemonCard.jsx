
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectedPokemonContext } from '../context/SelectedPokemonContext'
import { FavoritesPokemonContext } from '../context/favoritesPokemonContext'

export const PokemonCard = (props) => {

  const { favoritesPokemon, setFavoritesPokemon } = useContext( FavoritesPokemonContext )
  const { setSelectedPokemon } = useContext( SelectedPokemonContext )
  const [ isFavorite, setIsFavorite ] = useState(favoritesPokemon.includes( props.name ))
  const navigate = useNavigate()

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

    if ( favoritesPokemon.includes(props.name) ) {
      let newFavorites = favoritesPokemon
      let index = newFavorites.indexOf(props.name);
      newFavorites.splice(index, 1)
      setFavoritesPokemon( newFavorites )
      localStorage.setItem('pokemons', JSON.stringify(newFavorites))
    } else {
      setFavoritesPokemon( favoritesPokemon => [...favoritesPokemon, props.name ])
      let newFavorites = [...favoritesPokemon, props.name]
      localStorage.setItem('pokemons', JSON.stringify(newFavorites))
    }
  }

  const clickFavorite = () => {
    handleClickToggleFavorite()
    setIsFavorite( !isFavorite )
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
    <div className='flex flex-row gap-1 justify-center mx-1 mb-2'>
      <img className='drop-shadow-xl' src={`./assets/types/${types[0]}.svg`}/>
          {
            types[1] && (
              <img className='drop-shadow-xl' src={`./assets/types/${types[1]}.svg`}/>
            )
          }
    </div>

    </div>
    </>
  )
}