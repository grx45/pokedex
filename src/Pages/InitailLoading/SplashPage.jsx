import { Flex, Spinner, Image } from "@chakra-ui/react";
import SplashImage from "../../Assets/SplashImage.png";

function SplashPage() {
  return (
    <Flex
      flexDir={"column"}
      w="full"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bgColor={"#0e1f40"}
    >
      <Image src={SplashImage} />

      <Spinner color="yellow" size={"xl"} />
    </Flex>
  );
}

export default SplashPage;
