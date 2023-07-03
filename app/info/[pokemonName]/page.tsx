import { fetchPokemonInfo } from "@/utils";
import InfoPage from "./InfoPage";
import { InfoPokemonProps, PokemonInfo } from "@/types";

export default async function Home({ params }: InfoPokemonProps) {
  const infoPokemon: PokemonInfo = await fetchPokemonInfo(params.pokemonName);
  return (
    <main>
      <InfoPage infoPokemon={infoPokemon} />
    </main>
  );
}
