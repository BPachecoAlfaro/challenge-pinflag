import { useEffect, useState } from 'react'
import { PokemonCard } from '../components/PokemonCard'
import { Loading } from '../components/Loading'
import { useNavigate } from 'react-router-dom';
import { useFetchPokemonDataById } from '../hooks/useFetchPokemonDataById';
import { useGetPokemonNames } from '../helpers/useGetPokemonNames';
import { idGenerator } from '../helpers/idGenerator'
import { getPokemonData } from '../helpers/getPokemonData'
import { getPokemonList } from '../helpers/getPokemonList'


export const PokemonGridPage = () => {
  
  // const [pokemonList, setPokemonList] = useState(getPokemonList())
  // console.log( pokemonList )
  

  const [ start, setStart ] = useState(1)
  const ids = idGenerator(start)

  const handleNextPagination = () => {
    if (start + 30 > 996) return setStart( 996 )
    setStart(start + 30)
  }

  const handlePrevPagination = () => {
    if (start < 30) return setStart( 1 )
    setStart(start - 30)
  }

  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setLoading] = useState(false)
    
  const fetchData = async () => {
    setLoading(true)
      try {
        const dataArray = await Promise.all(ids.map(async (e) => {
          const data = await getPokemonData(e);
          return data;
        }));
        setPokemonData(dataArray);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      } finally {
        setLoading(false)
      }
  };

  useEffect(() => {
    fetchData();
    console.log(start)
    console.log( start + 29)
    console.log('useEffect from useFetchPokemonDataById')
  }, [start]);


  return (
    <>
      <div className='bg-blue-400 container mx-auto px-4'>PokemonGridPage</div>
      {
        isLoading && <Loading/> 
      }
      <div className='bg-slate-100 container mx-auto px-4 grid grid-cols-3 gap-4'>
        {
          pokemonData.map(pokemon => (
            <PokemonCard 
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              sprite={pokemon.sprites.other.home.front_default}
              types={pokemon.types}
            />
          ))
        }
        
      </div>
      <div className='bg-slate-100 grid grid-cols-3 items-center gap-2 p-4'>
        <button onClick={handlePrevPagination} className='bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-2xl'>prev page</button>
        <button className='bg-green-500'>HOME</button>
        <button onClick={handleNextPagination} className='bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-2xl'>next page</button>
      </div>
    </>
  )
}
