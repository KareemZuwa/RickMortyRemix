import React from "react";
interface FilterControlsProps {
  label: string;
  options: string[];
  selectedValue: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterControl = ({
  label,
  options,
  selectedValue,
  onChange,
}: FilterControlsProps) => {
  return (
    <div>
      {/* <label>{label}:</label> */}
      <select
        className="border p-1"
        value={selectedValue}
        onChange={onChange}
      >
        <option value={undefined}>All {label}s</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
