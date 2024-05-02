
import { useNavigate } from 'react-router-dom';
import { FavoritesPokemonContext } from '../context/favoritesPokemonContext';
import { useContext, useEffect } from 'react';

export const LandingPage = () => {
  const navigate = useNavigate();
  const toPokemongrid = () => navigate("pokemongrid")
  const { setFavoritesPokemon } = useContext( FavoritesPokemonContext )

  const initializeLocalStorage = () => {
    const existingData = localStorage.getItem('pokemons');
    if (!existingData) {
      localStorage.setItem('pokemons', JSON.stringify([]));
    }
  };

  useEffect(() => {
    initializeLocalStorage()
    setFavoritesPokemon(JSON.parse(localStorage.getItem('pokemons')))
  }, [])
  



  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 bg-no-repeat bg-cover bg-[url('../assets/poke.webp')]">
        <div className="relative bg-whiteshadow-xl ring-1 ring-gray-900/5 mx-auto max-w-lg rounded-lg">
        <button onClick={toPokemongrid} className="rounded-lg w-72 h-20 bg-lime-500">Start</button>
        </div>
      </div>
    </>
  )
}

