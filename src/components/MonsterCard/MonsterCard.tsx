import React from "react";

type MonsterCardProps = {
  name: string;
  image: string;
  type: string[];
  id: string;
};

const MonsterCard: React.FC<MonsterCardProps> = ({ name, image, type, id }) => {
  return (
    <div className="monster-card">
      <h4>#{id}</h4>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Type: {type.join(", ")}</p>
    </div>
  );
};

export default MonsterCard;
