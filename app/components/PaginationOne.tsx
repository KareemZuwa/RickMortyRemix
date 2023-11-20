import React from "react";
import type { LocationInfo } from "~/types/locationTypes";
interface PaginationProps {
  page: number;
  info: LocationInfo | undefined;
  setPage: (prevPage: (prevPage: number) => number) => void;
}

const Pagination = ({ page, info, setPage }: PaginationProps) => {
  const handlePrevClick = () => {
    if (page > 1) {
      setPage((prevPage: number) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    if (info?.next) {
      setPage((prevPage: number) => prevPage + 1);
    }
  };
  return (
    <div className="mt-16 w-full border-t-2 border-gray-900">
      <div className="py-6 flex flex-row justify-between ">
        <div>
          <div>Page {page} of </div>
        </div>
        <div className="flex space-x-8">
          <button onClick={handlePrevClick} disabled={page === 1}>
            Prev
          </button>
          <button onClick={handleNextClick} disabled={!info?.next}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
