import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2";

export const getMonsters = async () => {
  const response = await axios.get(`${API_BASE_URL}/pokemon?limit=100`);
  return response.data.results;
};

export const getMonsterDetails = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
