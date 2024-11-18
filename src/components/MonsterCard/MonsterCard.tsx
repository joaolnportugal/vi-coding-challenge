import React from "react";
import { MonsterCardProps, typeColors } from "../Types/Types";

const MonsterCard: React.FC<MonsterCardProps> = ({ name, image, type, id }) => {
  return (
    <div
      className="monster-card"
      onClick={() =>
        alert("To be linkable for the monster details page in the future!")
      }
    >
      <h4>#{id}</h4>
      <img src={image} alt={name} />
      <div className="name-types-wrapper">
        <h3>{name}</h3>
        <div className="types">
          {type.map((t) => (
            <span
              key={t}
              className="type-circle"
              style={{ backgroundColor: typeColors[t.toLowerCase()] }}
            >
              &nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonsterCard;
