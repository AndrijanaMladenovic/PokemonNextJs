import { ItemProps } from "@/types";
import React from "react";
interface PokemonProps {
  item: ItemProps;
}

export const Pokemon = ({ item }: PokemonProps) => {
  const { name, url } = item;
  return <div>{item.name}</div>;
};
