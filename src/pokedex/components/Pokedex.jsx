import { SelectedPokemonContext } from "../context/SelectedPokemonContext";
import { getPokemonData } from "../helpers/getPokemonData";
import { useState, useEffect, useContext } from 'react'
import { colorByType } from "../helpers/colorByType";
import { useNavigate } from "react-router-dom";
import { Loading } from './Loading'


export const Pokedex = () => {
  const { selectedPokemon } = useContext( SelectedPokemonContext )
  const navigate = useNavigate()

  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setLoading] = useState(true)

  const fetchData = async (id) => {
      const data = await getPokemonData(id);
      setPokemonData(data);
      setLoading(false)
  };

useEffect(() => {
    fetchData(selectedPokemon)
    console.log('useEffect from Pokedex')
}, []);

  // // const { pokemonData, isLoading} = useFetchPokedex( props.pokemon )
  // const { pokemonData, isLoading} = useFetchPokemonDataById( [props.pokemon] )
  // console.log( pokemonData)
  // const navigate = useNavigate()

  const handleClickGridPokemon = () => {
    navigate("/pokemongrid")
  }


  return (
    <>
    {
      isLoading ? <Loading/> : (
      <div className='container bg-slate-600'>
      <div className='grid'>
        <img className='' src={pokemonData.sprites.other.home.front_default}/>
          <div className='flex gap-4 items-center justify-center'>
            <div>#{pokemonData.id}</div>
            <div className='capitalize'>{pokemonData.name}</div>
          </div>
          <div className='flex gap-4 items-center justify-center'>
            {
              pokemonData.types.map(e => 
                <span key={e.slot} className={`${colorByType[e.type.name]} `}>{e.type.name}</span>)
            }
          </div>
          <div className='grid place-items-center'>
            <p>Weight {pokemonData.weight} lbs</p>
            <p>Heigth {pokemonData.height}</p>
          </div>
        <div className="grid place-items-center">Stats
            <p className='uppercase'>{pokemonData.stats[0].stat.name} {pokemonData.stats[0].base_stat}</p>
            <p className='uppercase'>{pokemonData.stats[1].stat.name} {pokemonData.stats[1].base_stat}</p>
            <p className='uppercase'>{pokemonData.stats[2].stat.name} {pokemonData.stats[2].base_stat}</p>
            <p className='uppercase'>{pokemonData.stats[3].stat.name} {pokemonData.stats[3].base_stat}</p>
            <p className='uppercase'>{pokemonData.stats[4].stat.name} {pokemonData.stats[4].base_stat}</p>
            <p className='uppercase'>{pokemonData.stats[5].stat.name} {pokemonData.stats[5].base_stat}</p>
          </div>
      </div>
      <button onClick={handleClickGridPokemon}>Back to grid</button>
    </div>
    )
    }
      
    </>
  )
}
