import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { PokemonClient } from "../Helpers/Axios";
import { fetchAllPokemon } from "../Helpers/Axios";

export const FetchAllPokemonQuery = () => {
  return useInfiniteQuery({
    queryKey: ["allPokemon"],
    queryFn: fetchAllPokemon,
    getNextPageParam: (lastPage) => lastPage.pageParam,
  });
};
