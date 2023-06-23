import { useEffect, useState } from "react";
import "./App.css";
import SplashPage from "./Pages/InitailLoading/SplashPage";
import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

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
          </Routes>
        </>
      )}
    </Container>
  );
}

export default App;
