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
    <div className="mt-16 w-[500px] flex flex-row justify-between">
      <button onClick={handlePrevClick} disabled={page === 1}>
        Prev
      </button>
      <span>Page {page}</span>
      <button onClick={handleNextClick} disabled={!info?.next}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
