import React from "react";
import type { LocationInfo } from "~/types/locationTypes";

interface PaginationProps {
  info: LocationInfo | undefined;
  page: number;
  onPageChange: (newPage: number) => void;
}

const Pagination = ({ info, page, onPageChange }: PaginationProps) => {
  const handlePrevClick = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  const handleNextClick = () => {
    if (info?.next != null && page < info.next) {
      onPageChange(page + 1);
    }
  };

  console.log(info?.pages);
  return (
    <div>
      {" "}
      <nav
        className="flex items-center justify-between border-t-2 border-gray-900 bg-white py-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <div className="flex space-x-4 divide-gray-900 divide-x-2">
            <p className="text-xs text-gray-900">
              Found: <b>{info?.count === null ? 0 : info?.count}</b>{" "}
              Locations
            </p>
            <p className="pl-4 text-xs text-gray-900">
              Showing page{" "}
              <span>
                <b>{page}</b>
              </span>{" "}
              to{" "}
              <span>
                <b>{info?.pages === null ? 1 : info?.pages}</b>
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
          <button
            onClick={handlePrevClick}
            disabled={page === 1}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 ring-2 ring-inset ring-gray-300 hover:bg-gray-200 focus-visible:outline-offset-0 ease-in duration-300 disabled:text-gray-300 disabled:hover:bg-white disabled:pointer-events-none"
          >
            Previous
          </button>
          <span className="flex sm:hidden items-center text-xs">
            {page} / {info?.pages === null ? 1 : info?.pages}
          </span>
          <button
            onClick={handleNextClick}
            disabled={!info?.next}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 ring-2 ring-inset ring-gray-300 hover:bg-gray-200 focus-visible:outline-offset-0 ease-in duration-300 disabled:text-gray-300 disabled:hover:bg-white disabled:pointer-events-none"
          >
            Next
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
