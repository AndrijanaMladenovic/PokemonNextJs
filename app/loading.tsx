import React from "react";
import { CgPokemon } from "react-icons/cg";

const loading = () => {
  return (
    <div className="flex align-middle items-center justify-center">
      <span className=" text-gray-300 font-bold text-5xl">Loading....</span>
      <CgPokemon className=" animate-spin w-52 h-52 text-gray-300" />
    </div>
  );
};

export default loading;
