"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { getPokemonImageUrl } from "@/utils";
import { getId } from "@/utils";
import { Pagination } from "./Pagination";
import { useEffect } from "react";

import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

import Link from "next/link";
import Navbar from "./Navbar";

import { FilterPokemon } from "./FilterPokemon";
import { Pokemon } from "@/types";
import { FilterItem } from "@/types";

const Main = ({ allPokemon }: any) => {
  const filterName = [
    { id: 1, name: "Lowest Number(First)", unavailable: false },
    { id: 2, name: "Highest Number(First)", unavailable: false },
    { id: 3, name: "A-Z", unavailable: false },
    { id: 4, name: "Z-A", unavailable: true },
  ];
  const itemsPerPage = 24;
  const totalPages = 36;
  const [query, setQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const [selected, setSelected] = useState<FilterItem>(filterName[0]);
  const [sortType, setSortType] = useState(true);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const [likedCards, setLikedCards] = useState<string[]>([]);

  const handleLike = (cardId: string) => {
    if (!likedCards.includes(cardId)) {
      setLikedCards([...likedCards, cardId]);
    }
  };

  useEffect(() => {
    const storedLikes = localStorage.getItem("likedCards");
    if (storedLikes !== null) {
      setLikedCards(JSON.parse(storedLikes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedCards", JSON.stringify(likedCards));
  }, [likedCards]);

  const deleteLike = (cardId: string): void => {
    const updatedLikedCards: string[] = likedCards.filter(
      (id: string) => id !== cardId
    );
    setLikedCards(updatedLikedCards);
  };

  const filterItems = allPokemon?.results.filter((item: { name: string }) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  const sortItems = () => {
    if (sortType === false) {
      filterItems.sort((a: any, b: any) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    }
    return filterItems;
  };

  const handleSortPokemon = () => {
    setSortType(!sortType);
    sortItems();
  };

  if (selected.id === 3) {
    filterItems.sort((a: any, b: any) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  if (selected.id === 4) {
    filterItems.sort((a: any, b: any) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }

  if (selected.id === 2) {
    filterItems.reverse();
  }

  const currentPokemonData = filterItems?.slice(startIndex, endIndex);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />
      <div className="flex gap-5 p-5">
        <FilterPokemon
          selected={selected}
          setSelected={setSelected}
          filterName={filterName}
        />
      </div>
      <div className="grid grid-cols-3 gap-3 mx-64">
        {currentPokemonData?.map((item: Pokemon) => {
          const id = getId(item.url);
          return (
            <div
              key={item.name}
              className="container_img flex flex-col align-middle items-center py-5 border rounded border-red-300">
              <Image
                src={getPokemonImageUrl(id)}
                alt="PokemonImage"
                width={250}
                height={250}
                className="rounded bg-gray-200"
              />
              <p className="text-white text-xl font-bold capitalize">
                {item.name} #{id}
              </p>
              <Link
                className=" text-red-600 font-bold underline"
                href={`/info/${item.name}`}>
                More Info
              </Link>
              <button
                className={
                  likedCards.includes(id)
                    ? "flex items-center  bg-blue-600 text-white font-bold border rounded p-2"
                    : "flex items-center bg-red-600 text-white font-bold border rounded p-2"
                }
                id={id + 1}
                onClick={() => {
                  handleLike(id);
                }}
                disabled={likedCards.includes(id)}>
                <AiFillLike className="text-white font-bold" />
                <p className=" font-bold text-white">
                  {`Like (${likedCards.includes(id) ? 1 : 0})`}
                </p>
              </button>
              {likedCards.includes(id) ? (
                <div
                  onClick={() => {
                    deleteLike(id);
                  }}
                  className="flex items-center  gap-1">
                  <AiFillDislike className=" text-red-500" />
                  <p className=" text-red-500 text-center">Dislike</p>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      {filterItems.length >= 24 ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Main;
