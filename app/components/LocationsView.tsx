import React, { useEffect, useState } from "react";
import AppLayout from "~/layouts/AppLayout";
import MainSection from "./MainSection";
import { FilterPanel } from "./FilterPanel";
import { useLocationsResults } from "~/hooks/useLocationsResults";
import SpinnerLoader from "./SpinnerLoader";
import { useNavigate } from "@remix-run/react";

export const LocationsView = () => {
  const [page, setPage] = useState(1);
  const [dimension] = useState("");
  const [type] = useState("");
  const navigate = useNavigate();
  
  const { data, isLoading, error } = useLocationsResults({
    page,
    dimension,
    type,
  });

  const results = data?.results;
  const info = data?.info;

  console.log(results, info);

  // pagination logic
  const handlePrevClick = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    if (data?.info.next) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    navigate(`/locations/${page}`);
  }, [navigate, page]);

  return (
    <AppLayout>
      <MainSection>
        <FilterPanel />
        {error ? (
          <div>Error Loading Locations</div>
        ) : isLoading ? (
          <SpinnerLoader />
        ) : (
          results?.map((location) => (
            <div key={location.id}>
              <div>{location.name}</div>
            </div>
          ))
        )}
        <div className="mt-16 w-[500px] flex flex-row justify-between">
          <button onClick={handlePrevClick} disabled={page === 1}>
            Prev
          </button>
          <span>Page {page}</span>
          <button onClick={handleNextClick} disabled={!info?.next}>
            Next
          </button>
        </div>
      </MainSection>
    </AppLayout>
  );
};
