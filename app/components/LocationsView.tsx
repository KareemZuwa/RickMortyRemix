import React, { useEffect, useState } from "react";
import AppLayout from "~/layouts/AppLayout";
import MainSection from "./MainSection";
import { FilterPanel } from "./FilterPanel";
import { useLocationsResults } from "~/hooks/useLocationsResults";
import SpinnerLoader from "./SpinnerLoader";
import { Link, useNavigate } from "@remix-run/react";
import Pagination from "./Pagination";

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

  useEffect(() => {
    navigate(`/locations/${page}`);
  }, [navigate, page]);

  return (
    <AppLayout>
      <div className="flex-1">
        <MainSection>
          <div className="flex-grow-1 flex flex-col justify-between ">
            <FilterPanel />

            <div>
              {error ? (
                <div>Error Loading Locations</div>
              ) : isLoading ? (
                <SpinnerLoader />
              ) : (
                results?.map((location) => (
                  <div key={location.id}>
                    <Link to={`/location/${location.id}`}>
                      <div>{location.name}</div>
                    </Link>
                  </div>
                ))
              )}
            </div>
            <Pagination page={page} info={info} setPage={setPage} />
          </div>
        </MainSection>
      </div>
    </AppLayout>
  );
};
