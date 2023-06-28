import axios from "axios";

export const PokemonClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const fetchAllPokemon = async ({ pageParam = 0 } = {}) => {
  const limit = 24;
  const { data } = await PokemonClient.get(
    `pokemon?limit=${limit}&offset=${pageParam * limit}`
  );

  // promise.all to wait for the promise resolution, to get the actual data
  const allURLResult = await Promise.all(
    data.results.map(async (val) => {
      const result = await PokemonClient.get(val.url);
      // console.log("abs", result.data);
      return result.data;
    })
  );
  return { allPokemonData: allURLResult, pageParam: pageParam + 1 };
};
