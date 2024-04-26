export const getPokemons = async(url) => {

    const resp = await fetch(url);
    const data = await resp.json();
    const nextPage = data.next;
    const prevPage = data.previous;
    console.log(data)

    const promises = data.results.map(async pokemon => {
        const res = await fetch(pokemon.url);
        const dataPokemons = await res.json();
        return dataPokemons;
    });

    const dataPokemons = await Promise.all(promises);

    console.log(dataPokemons, nextPage, prevPage);

    return { dataPokemons, nextPage, prevPage };
    

}