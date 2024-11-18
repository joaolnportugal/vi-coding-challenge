import React from "react";
import { MonsterFilterProps, typeColors } from "../Types/Types";

const MonsterFilter: React.FC<MonsterFilterProps> = ({
  types,
  selectedTypes = [],
  onChange,
}) => {
  const handleCheckboxChange = (type: string) => {
    const isAlreadySelected = selectedTypes.includes(type);
    const updatedSelectedTypes = isAlreadySelected
      ? selectedTypes.filter((t) => t !== type) // Remove type if already selected
      : [...selectedTypes, type]; // Add type if not selected
    onChange(updatedSelectedTypes); // Update parent state
  };

  return (
    <div className="monster-filter">
      <div style={{ marginLeft: "10px" }}>
        <p>Filter</p>
        <p style={{ marginTop: "-15px" }}>Type</p>
      </div>

      {types.map((type) => (
        <div className="filter-type" key={type}>
          <label style={{ marginInline: "5px" }}>
            <input
              type="checkbox"
              value={type}
              checked={selectedTypes.includes(type)}
              onChange={() => handleCheckboxChange(type)}
              style={{ marginRight: "10px" }}
            />
            {type}
          </label>
          <span
            key={type}
            className="type-circle"
            style={{ backgroundColor: typeColors[type] }}
          >
            &nbsp;
          </span>
        </div>
      ))}
    </div>
  );
};

export default MonsterFilter;
