import React, { useEffect, useMemo, useState } from "react";
import useTypes from "~/hooks/useTypes";
import Select from "react-select";
import useDimensions from "~/hooks/useDimensions";
interface FilterPanelProps {
  onTypeFilterChange: (type: string) => void;
  onDimensionFilterChange: (dimension: string) => void;
  dimension: string | undefined;
  type: string | undefined;
  setPage: (page: number) => void;
}

export const FilterPanel = ({
  onTypeFilterChange,
  onDimensionFilterChange,
  dimension,
  type,
  setPage,
}: FilterPanelProps) => {
  const [defaultType, setDefaultType] = useState(type);
  const [defaultDimension, setDefaultDimension] = useState(dimension);

  const {
    data: allTypesData,
    isLoading: allTypesIsLoading,
    error: allTypesError,
  } = useTypes();
  const {
    data: allDimensionsData,
    isLoading: allDimensionsIsLoading,
    error: allDimensionsError,
  } = useDimensions();

  // useMemo to memoize uniqueTypes
  const uniqueTypes = useMemo(
    () => allTypesData?.uniqueTypes || [],
    [allTypesData]
  );
  const uniqueDimensions = useMemo(
    () => allDimensionsData?.uniqueDimensions || [],
    [allDimensionsData]
  );

  useEffect(() => {
    // Set the default type value when types are loaded or changed
    if (!allTypesIsLoading && uniqueTypes.length > 0) {
      setDefaultType(uniqueTypes[0]);
    }
  }, [allTypesIsLoading, uniqueTypes, setPage]);

  useEffect(() => {
    // Set the default dimension value when dimensions are loaded or changed
    if (!allDimensionsIsLoading && uniqueDimensions.length > 0) {
      setDefaultDimension(uniqueDimensions[0]);
    }
  }, [allDimensionsIsLoading, uniqueDimensions, setPage]);

  // Handle loading and errors
  if (allTypesIsLoading || allDimensionsIsLoading)
    return <p>Loading filters...</p>;
  if (allTypesError || allDimensionsError) {
    return <p>Error fetching filters</p>;
  }

  // Create object options with 'value' and 'label' properties so react-select is happy
  const typeOptions = uniqueTypes.map((type) => ({ value: type, label: type }));
  const dimensionOptions = uniqueDimensions.map((dimension) => ({
    value: dimension,
    label: dimension,
  }));

  // Add "All Types" and "All Dimensions" options to top of list
  typeOptions.unshift({ value: "", label: "All Types" });
  dimensionOptions.unshift({ value: "", label: "All Dimensions" });

  return (
    <div className="pt-8 px-4 sm:px-0 sm:pt-0 sm:flex space-y-8 sm:space-y-0 sm:space-x-8">
      <Select
        className="w-full sm:w-40 border-2 border-gray-900 rounded-md"
        id="typeDropdown"
        options={typeOptions}
        onChange={(selectedOption) => {
          onTypeFilterChange(selectedOption?.value || "");
          setPage(1);
        }}
        defaultValue={{ value: defaultType, label: "All Types" }}
      />

      <Select
        className="w-full sm:w-40 border-2 border-gray-900 rounded-md"
        id="dimensionDropdown"
        options={dimensionOptions}
        onChange={(selectedOption) => {
          onDimensionFilterChange(selectedOption?.value || "");
          setPage(1);
        }}
        defaultValue={{ value: defaultDimension, label: "All Dimensions" }}
      />
    </div>
  );
};
