import { useSelector } from "react-redux";

export const FavouriteReducerData = () => {
  const favouritePokemonList = useSelector(
    (state) => state.favouriteReducer.data
  );
  return favouritePokemonList;
};
