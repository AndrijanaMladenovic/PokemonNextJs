import { Main } from "@/components";
import Navbar from "@/components/Navbar";
import { fetchPokemon } from "@/utils";
import Image from "next/image";
import { getId } from "@/utils";
import { useState } from "react";
import { Pagination } from "@/components/Pagination";

export default async function Home() {
  const allPokemon = await fetchPokemon();

  return (
    <main>
      <Main allPokemon={allPokemon} />
    </main>
  );
}
