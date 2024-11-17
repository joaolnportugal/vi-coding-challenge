import React from "react";

type MonsterFilterProps = {
  types: string[];
  selectedType: string;
  onChange: (type: string) => void;
};

const MonsterFilter: React.FC<MonsterFilterProps> = ({
  types,
  selectedType,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor="filter">Filter by Type: </label>
      <select
        id="filter"
        value={selectedType}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonsterFilter;
