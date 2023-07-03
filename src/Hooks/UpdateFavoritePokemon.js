import {
  collection,
  query,
  where,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../lib/Firebaseinit";
import { useFavouritePokemon } from "../Helpers/GetFavouritePokemon";

export const UpdateFavoritePokemon = () => {
  const [likeLoading, setLikeLoading] = useState(false);
  const [unlikeLoading, setUnlikeLoading] = useState(false);
  const [iserror, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { getAndUpdateFavouritePokemon } = useFavouritePokemon();

  const onBtnLike = async (id) => {
    try {
      const q = query(
        collection(db, "favourites"),
        where("pokemon_id", "==", id)
      );
      const querySnapshot = await getDocs(q);
      const result = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (result.length) {
        // if pokemon already in fav list
        setUnlikeLoading(true);
        const docRef = doc(db, "favourites", result[0].id);
        await deleteDoc(docRef);
        setUnlikeLoading(false);
        getAndUpdateFavouritePokemon();
      } else {
        setLikeLoading(true);
        const collectionRef = collection(db, "favourites");
        const payload = { pokemon_id: id };
        await addDoc(collectionRef, payload);
        setLikeLoading(false);
        getAndUpdateFavouritePokemon();
      }
    } catch (error) {
      setErrorMessage(errorMessage);
      setIsError(true);
      console.log("error like button", error);
    }
  };

  return { onBtnLike, likeLoading, unlikeLoading, iserror, errorMessage };
};
