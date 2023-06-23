import { useQuery } from "@tanstack/react-query";
import { PokemonClient } from "../Helpers/Axios";

export const FetchPokemonDetail = (id, isRandom) => {
  const randomNumber = Math.floor(Math.random() * 1010) + 1;
  return useQuery({
    queryKey: ["onePokemon"],
    queryFn: async () => {
      const result = await PokemonClient.get(
        `pokemon/${isRandom ? randomNumber : id}`
      );
      return result.data;
    },
  });
};
