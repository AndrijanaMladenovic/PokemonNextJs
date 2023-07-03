"use client";
import React from "react";

import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FilterPokemonProps } from "@/types";

export const FilterPokemon = ({
  selected,
  setSelected,
  filterName,
}: FilterPokemonProps) => {
  return (
    <div className="top-16 w-96 flex flex-row items-center gap-5 ">
      <p>Sort By</p>
      <Listbox value={selected} onChange={setSelected}>
        <div className=" relative mt-1">
          <Listbox.Button className="relative w-56 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <AiOutlineCaretDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filterName.map((filter, filterIdx) => (
                <Listbox.Option
                  key={filterIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-red-200 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={filter}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {filter.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <AiOutlineCheckCircle
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
