"use client";
import React from "react";

interface PageProp {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, goToPage }: PageProp) => {
  return (
    <div className="flex justify-center -space-x-px pb-9 ">
      <button
        className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}>
        Previous
      </button>

      <button
        className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => goToPage(currentPage - 1)}>
        {currentPage - 1}
      </button>

      <button
        className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => goToPage(currentPage)}>
        {currentPage}
      </button>

      <button
        className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => goToPage(currentPage + 1)}>
        {currentPage + 1}
      </button>
      <button
        className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}>
        Next
      </button>
    </div>
  );
};
