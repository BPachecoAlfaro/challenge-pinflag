import { useState, useEffect } from 'react'
import { colorByType } from "../helpers/colorByType"
import { useParams } from 'react-router-dom'
import { useFetchPokedex } from '../hooks/useFetchPokedex'
import { getPokemonData } from '../helpers/getPokemonData'


export const PokedexPage = () => {

  const { id } = useParams()

  const [data, setData] = useState('pichula')

  useEffect(() => {
    // Función asincrónica para obtener los datos de la API
    const fetchData = async () => {
      try {
        // Realizamos la llamada a la API
        const response = await fetch('https://api.example.com/data');
        // Verificamos si la respuesta es exitosa
        if (response.ok) {
          // Convertimos la respuesta a formato JSON
          const jsonData = await response.json();
          // Actualizamos el estado con los datos obtenidos
          setData(jsonData);
        } else {
          // Manejamos el caso en que la respuesta no sea exitosa
          throw new Error('Error al obtener los datos');
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    // Llamamos a la función fetchData para obtener los datos cuando el componente se monte
    fetchData();

    // La lista de dependencias está vacía, lo que significa que este efecto solo se ejecutará una vez,
    // cuando el componente se monte.
  }, []);



  return (
    <>
      {/* <h1>PokedexPage</h1>
      <div className='container bg-slate-600'>
        <div className='grid'>
          <img className='' src={pokemonData2.sprites.other.home.front_default}/>
            <div className='flex gap-4 items-center justify-center'>
              <div>#{pokemonData2.id}</div>
              <div className='capitalize'>{pokemonData2.name}</div>
            </div>
            <div className='flex gap-4 items-center justify-center'>
              {
                pokemonData2.types.map(e => 
                  <span key={e.slot} className={`${colorByType[e.type.name]} `}>{e.type.name}</span>)
              }
            </div>
            <div className='grid place-items-center'>
              <p>Weight {pokemonData2.weight} lbs</p>
              <p>Heigth {pokemonData2.height}</p>
            </div>
          <div className="grid place-items-center">Stats
              <p className='uppercase'>{pokemonData2.stats[0].stat.name} {pokemonData2.stats[0].base_stat}</p>
              <p className='uppercase'>{pokemonData2.stats[1].stat.name} {pokemonData2.stats[1].base_stat}</p>
              <p className='uppercase'>{pokemonData2.stats[2].stat.name} {pokemonData2.stats[2].base_stat}</p>
              <p className='uppercase'>{pokemonData2.stats[3].stat.name} {pokemonData2.stats[3].base_stat}</p>
              <p className='uppercase'>{pokemonData2.stats[4].stat.name} {pokemonData2.stats[4].base_stat}</p>
              <p className='uppercase'>{pokemonData2.stats[5].stat.name} {pokemonData2.stats[5].base_stat}</p>
            </div>
        </div>
        <button>Back to grid</button>
      </div> */}
    </>
  )
}
