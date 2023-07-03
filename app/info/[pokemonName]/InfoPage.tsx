import React from "react";
import Image from "next/image";
import { getPokemonImageUrl } from "@/utils";
import { InfoPokemonProps, PokemonInfo } from "@/types";

export default async function InfoPage({
  infoPokemon,
}: {
  infoPokemon: PokemonInfo;
}) {
  return (
    <>
      <div className=" flex items-center h-20 p-4 bg-red-500 justify-around"></div>
      <div className="flex justify-center gap-8 items-center pt-8">
        <Image
          src={getPokemonImageUrl(infoPokemon.id)}
          alt="Pokemon image"
          width={250}
          height={250}
        />

        <div className="flex flex-col gap-8">
          <div>
            <h1 className=" text-center font-bold text-red-500 text-5xl pb-2">
              Name
            </h1>
            <p className="capitalize text-center text-red text-2xl">
              {infoPokemon.name}
            </p>
          </div>
          <div>
            <h1 className=" text-center font-bold text-red-500 text-5xl pb-2">
              Abilities
            </h1>
            <p className="text-center text-red text-2xl">
              {infoPokemon.abilities?.map((item, i) => {
                return (
                  <p key={i} className="capitalize">
                    {item.ability.name}
                  </p>
                );
              })}
            </p>
          </div>
          <div>
            <h1 className=" text-center font-bold text-red-500 text-5xl pb-2">
              Type
            </h1>
            <p className="text-center text-red text-2xl capitalize">
              {infoPokemon.types?.map((item, i) => {
                return <p key={i}>{item.type.name}</p>;
              })}
            </p>
          </div>
          <div>
            <h1 className=" text-center font-bold text-red-500 text-5xl pb-2">
              Stats
            </h1>
            <p className="text-center text-red text-2xl">
              {infoPokemon.stats?.map((item) => {
                return (
                  <p className=" capitalize">
                    {item.stat.name}({item.base_stat})
                  </p>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
