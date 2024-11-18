export const typeColors: { [key: string]: string } = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#ffe600",
  rock: "#B8A038",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "rgb(4, 0, 255)",
  dark: "#302c2c",
  fairy: "#EE99AC",
  poison: "#7e00f5",
  flying: "#bfefff",
  bug: "#69864d",
  normal: "#ecdddd",
  ground: "#e4d373",
  fighting: "#a10000",
  steel: "#a8a8a8",
  ghost: "#be99ff",
};

export type MonsterCardProps = {
  name: string;
  image: string;
  type: string[];
  id: string;
};

export type MonsterFilterProps = {
  types: string[];
  selectedTypes: string[];
  onChange: (types: string[]) => void;
};

export type MonsterListProps = {
  isHeadingVisible: boolean;
};
