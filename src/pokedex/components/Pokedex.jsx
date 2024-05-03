
import { getPokemonData } from "../helpers/getPokemonData";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Loading } from './Loading'


export const Pokedex = (props) => {

  const navigate = useNavigate()
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setLoading] = useState(true)

  const fetchData = async (id) => {
    const data = await getPokemonData(id);
    setPokemonData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(props.id)
  }, []);


  const handleClickGridPokemon = () => {
    navigate("/pokemongrid")
  }

  return (
    <>
    {
      isLoading ? <Loading/> : (
    <div className="bg-pokemonTypeColor-grass grid md:grid-rows-[1fr,2fr,5fr]">
      <section className="truncate mx-2 flex justify-between">
        <img onClick={ handleClickGridPokemon } src="../assets/icons/back.svg" className="self-center"/>
        <span className="truncate font-poppins font-bold text-2xl text-pokedex-white self-center capitalize">{pokemonData.name}</span>
        <span className="font-poppins font-bold text-xs text-pokedex-white self-center">#{pokemonData.id}</span>
      </section>
      <img className="h-full w-full drop-shadow-2xl" src={pokemonData.sprites.other.home.front_default}/>
      <section className="h-full">
        <div className="bg-pokedex-white h-full rounded-xl mx-2 grid grid-rows-2 place-items-center">
          <div className="">
            {
              pokemonData.types.map(e => 
                <img key={e.slot} className='drop-shadow-xl' src={`../assets/types/${e.type.name}.svg`}/>)
            }
          </div>
          <div>
            <p className='text-pokemonTypeColor-grass'>HP {pokemonData.stats[0].base_stat}</p>
            <p className='text-pokemonTypeColor-grass'>ATK {pokemonData.stats[1].base_stat}</p>
            <p className='text-pokemonTypeColor-grass'>DEF {pokemonData.stats[2].base_stat}</p>
            <p className='text-pokemonTypeColor-grass'>SATK {pokemonData.stats[3].base_stat}</p>
            <p className='text-pokemonTypeColor-grass'>SDEF {pokemonData.stats[4].base_stat}</p>
            <p className='text-pokemonTypeColor-grass'>SPD {pokemonData.stats[5].base_stat}</p>
          </div>
        </div>
      </section>
    </div>
    )}
    {/* 
    <button className="bg-green-500 rounded-2xl" onClick={handleClickGridPokemon}>Back to grid</button>
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
    <p className='uppercase'>{pokemonData.stats[5].stat.name} {pokemonData.stats[5].base_stat}</p> 
    */}
      
    </>
  )
}
