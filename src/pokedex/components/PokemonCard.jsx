
import { useState } from 'react'
import { colorByType } from "../helpers/colorByType"
import { useNavigate } from 'react-router-dom'

export const PokemonCard = (props) => {

  // const [selectedPokemon, setSelectedPokemon] = useState()
  const navigate = useNavigate()

  let types = []
  const getPokemonTypes = (() => {
    props.types.map((e) => {
      types.push(e.type.name)
    })
  })();

  const handleClickOnPokemon = () => {
    console.log(props.id);
    navigate(`/pokedex/${props.id}`);
  }


  return (
    <>
    <div onClick={handleClickOnPokemon} className='bg-slate-500 w-auto aspect-[5/8] grid rounded-[1rem] mt-4 drop-shadow-xl'>
      <img className='bg-slate-100 rounded-[1rem] h-auto w-auto' src={props.sprite}/>
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