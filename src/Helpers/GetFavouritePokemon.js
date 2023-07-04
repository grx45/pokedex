import { useState } from "react";
import { useDispatch } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { favouriteAction } from "../reducers/favourite";
import { db } from "../lib/Firebaseinit";

export const useFavouritePokemon = () => {
  const dispatch = useDispatch();
  const [favouriteList, setFavouriteList] = useState([]);

  const getAndUpdateFavouritePokemon = async () => {
    const collectionRef = collection(db, "favourites");
    const dataFromFirebase = await getDocs(collectionRef);
    const result = dataFromFirebase.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setFavouriteList(result);
    dispatch(favouriteAction(result));
  };
  return { getAndUpdateFavouritePokemon };
};
