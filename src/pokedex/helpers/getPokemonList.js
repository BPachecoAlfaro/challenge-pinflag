
export const getPokemonList = async() => {

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1025`);
    const data = await resp.json();
    const pokemonList = data.results.map( (e) => (e.name))

    return pokemonList;
    
}