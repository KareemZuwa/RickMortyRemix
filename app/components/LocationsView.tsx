import React, { useEffect, useState } from "react";
import AppLayout from "~/layouts/AppLayout";
import MainSection from "./MainSection";
import { useLocationsResults } from "~/hooks/useLocationsResults";
import SpinnerLoader from "./SpinnerLoader";
import { useNavigate } from "@remix-run/react";
import Pagination from "./Pagination";
import { removeDuplicatesFromArray } from "~/utils/removeDuplicates";
import { FilterControl } from "~/components/FilterControl";
import LocationCard from "./LocationCard";

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

  console.log(results, info);

  useEffect(() => {
    navigate(`/locations/${page}`);
  }, [navigate, page]);

  const handleTypeChange = (event: { target: { value: string } }) => {
    setType(event.target.value);
  };

  const handleDimensionChange = (event: { target: { value: string } }) => {
    setDimension(event.target.value);
  };

  const currentTypes = data?.results.map((results) => results.type);
  const uniqueTypes = removeDuplicatesFromArray(currentTypes);
  console.log(uniqueTypes);
  const currentDimensions = data?.results.map((results) => results.dimension);
  const uniqueDimensions = removeDuplicatesFromArray(currentDimensions);
  console.log(uniqueDimensions);

  return (
    <AppLayout>
      <div>
        <MainSection>
          <div>
            <div className="flex justify-between py-8">
              <h2 className="text-gray-900 text-3xl font-racing tracking-wide antialiased underline decoration-galaxyOrange-900">
                Locations
              </h2>
              <div className="flex place-items-center flex-row space-x-8">
                <FilterControl
                  label="Type"
                  options={uniqueTypes as string[]}
                  selectedValue={type}
                  onChange={handleTypeChange}
                />
                <FilterControl
                  label="Dimension"
                  options={uniqueDimensions as string[]}
                  selectedValue={dimension}
                  onChange={handleDimensionChange}
                />
              </div>
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
