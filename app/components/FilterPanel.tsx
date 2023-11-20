import React from "react";
import useTypes from "~/hooks/useTypes";
import Select from "react-select";
import useDimensions from "~/hooks/useDimensions";
interface FilterPanelProps {
  onTypeFilterChange: (type: string) => void;
  onDimensionFilterChange: (dimension: string) => void;
}

export const FilterPanel = ({
  onTypeFilterChange,
  onDimensionFilterChange,
}: FilterPanelProps) => {
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

  let uniqueTypes = allTypesData?.uniqueTypes || [];
  let uniqueDimensions = allDimensionsData?.uniqueDimensions || [];

  if (allTypesIsLoading || allDimensionsIsLoading) return <p>Loading...</p>;

  if (allTypesError || allDimensionsError) {
    return <p>Error fetching</p>;
  }

  return (
    <div className="flex space-x-8">
      <Select
        className="w-44 border-2 border-gray-900 rounded-md"
        id="typeDropdown"
        options={uniqueTypes.map((type) => ({ value: type, label: type }))}
        onChange={(selectedOption) =>
          onTypeFilterChange(selectedOption?.value || "")
        }
        defaultValue={{ value: " ", label: "All Types" }}
      />

      <Select
        className="w-44 border-2 border-gray-900 rounded-md"
        id="dimensionDropdown"
        options={uniqueDimensions.map((dimension) => ({
          value: dimension,
          label: dimension,
        }))}
        onChange={(selectedOption) =>
          onDimensionFilterChange(selectedOption?.value || "")
        }
        defaultValue={{ value: " ", label: "All Dimensions" }}
      />
    </div>
  );
};
