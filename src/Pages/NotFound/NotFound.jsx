import { Flex, Image, Button } from "@chakra-ui/react";
import notFound from "../../Assets/notFound.png"
import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate()

    return (
        <Flex
            flexDir={"column"}
            w="full"
            h="100vh"
            justifyContent="center"
            alignItems="center"
            bg={"#F9F9F9"}

        >
            <Image src={notFound} />
            <Button mt="2" variant={"solid"} bgColor={"#0e1f40"} color={"#FFF200"} _hover={{ opacity: "0.8" }} size={"lg"} onClick={() => navigate("/")}>
                Return Home
            </Button>


        </Flex>
    );
}

export default NotFound;