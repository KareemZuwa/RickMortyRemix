import React from "react";
interface FilterPanelProps {
  uniqueTypes: string[];
  uniqueDimensions: string[];
  onFilterChange: (
    selectedType: string | undefined,
    selectedDimension: string | undefined
  ) => void;
}

export const FilterPanel = ({
  uniqueTypes,
  uniqueDimensions,
  onFilterChange,
}: FilterPanelProps) => {
  const handleTypeChange = (selectedType: string | undefined) => {
    onFilterChange(selectedType, undefined);
  };

  const handleDimensionChange = (selectedDimension: string | undefined) => {
    onFilterChange(undefined, selectedDimension);
  };

  return (
    <div className="h-16 flex flex-row justify-between items-center">
      <h3 className="text-gray-900">
        Please choose a Location or filter Locations by Type or Dimension
      </h3>

      <div className="flex flex-row space-x-8">
        <select
          className="w-16"
          onChange={(e) => handleTypeChange(e.target.value)}
        >
          <option defaultValue={"Select"}>Select a type</option>
          {uniqueTypes?.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          className="w-16"
          onChange={(e) => handleDimensionChange(e.target.value)}
        >
          <option defaultValue={"Select"}>Select a dimension</option>
          {uniqueDimensions?.map((dimension) => (
            <option key={dimension} value={dimension}>
              {dimension}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
