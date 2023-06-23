import axios from "axios";

export const PokemonClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
