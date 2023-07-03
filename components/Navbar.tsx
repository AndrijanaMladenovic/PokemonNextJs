import React, { ChangeEvent, SetStateAction } from "react";
import Image from "next/image";
import { FilterItem, NavbarProps } from "@/types";

const Navbar = ({ query, setQuery }: NavbarProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div className=" flex items-center h-20 p-4 bg-red-500 justify-around">
      <Image width={150} height={150} src="/logo.png" alt="logo" />
      <label htmlFor="">
        <span className=" font-bold text-white p-2">Search</span>
        <input
          value={query}
          onChange={handleInputChange}
          className="rounded"
          type="search"
        />
      </label>
    </div>
  );
};

export default Navbar;
