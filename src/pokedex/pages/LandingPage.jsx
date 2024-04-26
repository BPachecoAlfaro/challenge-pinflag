
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const navigate = useNavigate();

  const toPokemongrid = () => navigate("pokemongrid")

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

