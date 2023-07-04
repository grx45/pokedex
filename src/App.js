import { useEffect, useState } from "react";
import SplashPage from "./Pages/InitailLoading/SplashPage";
import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import FooterBar from "./Components/FooterBar/FooterBar";
import Favourite from "./Pages/Favourite/Favourite";
import NotFound from "./Pages/NotFound/NotFound";
import { useFavouritePokemon } from "./Helpers/GetFavouritePokemon";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { getAndUpdateFavouritePokemon } = useFavouritePokemon();

  useEffect(() => {
    const fetchData = async () => {
      await getAndUpdateFavouritePokemon();
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
    fetchData();
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
