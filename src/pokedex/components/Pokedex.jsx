import { SelectedPokemonContext } from "../context/SelectedPokemonContext";
import { getPokemonData } from "../helpers/getPokemonData";
import { useState, useEffect, useContext } from 'react'
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
    fetchData(1)
  }, []);


  const handleClickGridPokemon = () => {
    navigate("/pokemongrid")
  }

  return (
    <>{
      isLoading ? <Loading/> : (
    <div className="min-h-screen bg-pokemonTypeColor-grass grid grid-rows-[1fr,2fr,6fr]">
      <section className="truncate flex mx-2 justify-between">
        <img src="./assets/icons/back.svg" className="self-center"/>
        <span className="truncate font-poppins font-bold text-2xl text-pokedex-white self-center capitalize">{pokemonData.name}</span>
        <span className="font-poppins font-bold text-xs text-pokedex-white self-center">#{pokemonData.id}</span>
      </section>
      <section className="relative grid">
        <img className="w-2/3 r self-center" src={pokemonData.sprites.other.home.front_default}/>
      </section>
      <section className="h-full">
        <div className="bg-pokedex-white h-full rounded-xl mx-2">
          <p className='uppercase'>{pokemonData.stats[0].stat.name} {pokemonData.stats[0].base_stat}</p>
          <p className='uppercase'>{pokemonData.stats[1].stat.name} {pokemonData.stats[1].base_stat}</p>
          <p className='uppercase'>{pokemonData.stats[2].stat.name} {pokemonData.stats[2].base_stat}</p>
          <p className='uppercase'>{pokemonData.stats[3].stat.name} {pokemonData.stats[3].base_stat}</p>
          <p className='uppercase'>{pokemonData.stats[4].stat.name} {pokemonData.stats[4].base_stat}</p>
          <p className='uppercase'>{pokemonData.stats[5].stat.name} {pokemonData.stats[5].base_stat}</p>
        </div>
      </section>
    </div>
      )}
    {/* <button className="bg-green-500 rounded-2xl" onClick={handleClickGridPokemon}>Back to grid</button>
    {pokemonData.name}
    #{pokemonData.id}
    {pokemonData.sprites.other.home.front_default}
    {
    pokemonData.types.map(e => 
      <img key={e.slot} className='drop-shadow-xl' src={`./assets/types/${e.type.name}.svg`}/>)
    }
    <p>Weight {pokemonData.weight} lbs</p>
    <p>Heigth {pokemonData.height}</p>
    <p className='uppercase'>{pokemonData.stats[0].stat.name} {pokemonData.stats[0].base_stat}</p>
    <p className='uppercase'>{pokemonData.stats[1].stat.name} {pokemonData.stats[1].base_stat}</p>
    <p className='uppercase'>{pokemonData.stats[2].stat.name} {pokemonData.stats[2].base_stat}</p>
    <p className='uppercase'>{pokemonData.stats[3].stat.name} {pokemonData.stats[3].base_stat}</p>
    <p className='uppercase'>{pokemonData.stats[4].stat.name} {pokemonData.stats[4].base_stat}</p>
    <p className='uppercase'>{pokemonData.stats[5].stat.name} {pokemonData.stats[5].base_stat}</p> */}

    {/* {
      isLoading ? <Loading/> : (
      <div className='w-screen h-screen bg-slate-100 mx-auto px-4 grid place-items-center'>
        <img className='drop-shadow-xl' src={pokemonData.sprites.other.home.front_default}/>
          <div className='flex gap-4 items-center justify-center'>
            <div>#{pokemonData.id}</div>
            <div className='capitalize'>{pokemonData.name}</div>
          </div>
          <div className='flex gap-4 items-center justify-center'>
            {
              pokemonData.types.map(e => 
                <img key={e.slot} className='drop-shadow-xl' src={`./assets/types/${e.type.name}.svg`}/>)
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
      <button className="bg-green-500 rounded-2xl" onClick={handleClickGridPokemon}>Back to grid</button>
    </div>
    )
    } */}


      
    </>
  )
}
