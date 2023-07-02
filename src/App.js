import { useEffect, useState } from "react";
import "./App.css";
import SplashPage from "./Pages/InitailLoading/SplashPage";
import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import FooterBar from "./Components/FooterBar/FooterBar";
import Favourite from "./Pages/Favourite/Favourite";
import NotFound from "./Pages/NotFound/NotFound";
import { useDispatch } from "react-redux";
import { db } from "./lib/Firebaseinit";
import { collection, getDocs } from "firebase/firestore";
import { favouriteAction } from "./reducers/favourite";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [favouriteList, setFavouriteList] = useState([]);

  const getFavouritePokemon = async () => {
    const collectionRef = collection(db, "favourites");
    const dataFromFirebase = await getDocs(collectionRef);
    const result = dataFromFirebase.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setFavouriteList(result);
    dispatch(favouriteAction(result));
  };

  useEffect(() => {
    getFavouritePokemon();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <Container px="0" maxW="md" m="auto">
      {isLoading ? (
        <SplashPage />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FooterBar />
        </>
      )}
    </Container>
  );
}

export default App;
