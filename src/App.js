import { useEffect, useState } from "react";
import "./App.css";
import SplashPage from "./Pages/InitailLoading/SplashPage";
import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import FooterBar from "./Components/FooterBar/FooterBar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
          </Routes>
          <FooterBar />
        </>
      )}
    </Container>
  );
}

export default App;
