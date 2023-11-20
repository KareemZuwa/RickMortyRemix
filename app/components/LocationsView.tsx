import React, { useEffect, useState } from "react";
import AppLayout from "~/layouts/AppLayout";
import MainSection from "./MainSection";
import { useLocationsResults } from "~/hooks/useLocationsResults";
import SpinnerLoader from "./SpinnerLoader";
import { useNavigate } from "@remix-run/react";
import Pagination from "./Pagination";
import LocationCard from "./LocationCard";
import { FilterPanel } from "./FilterPanel";

export const LocationsView = () => {
  const [page, setPage] = useState(1);
  const [dimension, setDimension] = useState<string | undefined>("");
  const [type, setType] = useState<string | undefined>("");
  const navigate = useNavigate();

  const { data, isLoading, error } = useLocationsResults({
    page,
    dimension,
    type,
  });

  const results = data?.results || [];
  const info = data?.info;

  useEffect(() => {
    navigate(`/locations/${page}`);
  }, [navigate, page]);

  return (
    <AppLayout>
      <div>
        <MainSection>
          <div>
            <div className="sm:flex justify-between py-8">
              <h2 className="text-center sm:text-left text-gray-900 text-3xl font-racing tracking-wide antialiased underline decoration-galaxyOrange-900">
                Locations
              </h2>
              <FilterPanel
                onTypeFilterChange={setType}
                onDimensionFilterChange={setDimension}
                dimension={dimension}
                type={type}
              />
            </div>

            <div className="h-full flex justify-between">
              {error ? (
                <div>Error Loading Locations</div>
              ) : isLoading ? (
                <div className="h-full w-full flex items-center justify-center py-16">
                  <SpinnerLoader />
                </div>
              ) : (
                <div className="h-full flex justify-between">
                  <LocationCard results={results} page={page} />
                </div>
              )}
            </div>
            <div className="mt-8">
              <Pagination page={page} info={info} onPageChange={setPage} />
            </div>
          </div>
        </MainSection>
      </div>
    </AppLayout>
  );
};
