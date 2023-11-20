import React, { useEffect, useMemo, useState } from "react";
import useTypes from "~/hooks/useTypes";
import Select from "react-select";
import useDimensions from "~/hooks/useDimensions";
interface FilterPanelProps {
  onTypeFilterChange: (type: string) => void;
  onDimensionFilterChange: (dimension: string) => void;
  dimension: string | undefined;
  type: string | undefined;
}

export const FilterPanel = ({
  onTypeFilterChange,
  onDimensionFilterChange,
  dimension,
  type,
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
  }, [allTypesIsLoading, uniqueTypes]);

  useEffect(() => {
    // Set the default dimension value when dimensions are loaded or changed
    if (!allDimensionsIsLoading && uniqueDimensions.length > 0) {
      setDefaultDimension(uniqueDimensions[0]);
    }
  }, [allDimensionsIsLoading, uniqueDimensions]);

  // Handle loading and errors
  if (allTypesIsLoading || allDimensionsIsLoading)
    return <p>Loading filters...</p>;
  if (allTypesError || allDimensionsError) {
    return <p>Error fetching filters</p>;
  }

  // Create options with 'value' and 'label' properties so react-select is happy
  const typeOptions = uniqueTypes.map((type) => ({ value: type, label: type }));
  const dimensionOptions = uniqueDimensions.map((dimension) => ({
    value: dimension,
    label: dimension,
  }));

  // Add "All Types" and "All Dimensions" options
  typeOptions.unshift({ value: "", label: "All Types" });
  dimensionOptions.unshift({ value: "", label: "All Dimensions" });

  return (
    <div className="flex space-x-8">
      <Select
        className="w-40 border-2 border-gray-900 rounded-md"
        id="typeDropdown"
        options={typeOptions}
        onChange={(selectedOption) =>
          onTypeFilterChange(selectedOption?.value || "")
        }
        defaultValue={{ value: defaultType, label: "All Types" }}
      />

      <Select
        className="w-40 border-2 border-gray-900 rounded-md"
        id="dimensionDropdown"
        options={dimensionOptions}
        onChange={(selectedOption) =>
          onDimensionFilterChange(selectedOption?.value || "")
        }
        defaultValue={{ value: defaultDimension, label: "All Dimensions" }}
      />
    </div>
  );
};
