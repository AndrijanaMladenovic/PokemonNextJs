import { PageProps } from "@/types";

export async function fetchPokemon() {
 const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=864",{next:{revalidate:10}});
    const result = await response.json();
    return result;
}

export const getId =(url:string)=>{
  const index = url.lastIndexOf("/")

  return url.slice(34,index)

}

 export const getPokemonImageUrl = (pokemonNumber : string) =>
    `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(
      pokemonNumber
    ).padStart(3, "0")}.png`;


export async function fetchPokemonInfo(pokemonId:string) {
 const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,{next:{revalidate:10}});
    const result = await response.json();
    return result;
}
