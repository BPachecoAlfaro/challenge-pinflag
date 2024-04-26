export const getPokemonNames = async(url) => {

    const resp = await fetch(url);
    const data = await resp.json();
    const next = data.next;
    const prev = data.previous;

    // let pokemonNames = []
    // pokemonNames.push(data.map.results(e => e.name))
    
}