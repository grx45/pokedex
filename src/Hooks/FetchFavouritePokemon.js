import { useQuery } from "@tanstack/react-query";
import { PokemonClient } from "../Helpers/Axios";

export const FetchFavouritePokemon = (data) => {
  return useQuery({
    queryKey: ["favourite-Pokemon"],
    queryFn: async () => {
      const favouriteMap = await Promise.all(
        data?.map(async (val) => {
          const result = await PokemonClient.get(`pokemon/${val.pokemon_id}`);
          return result.data;
        })
      );
      return favouriteMap;
    },
  });
};
