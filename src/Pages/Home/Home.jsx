import { Box, Heading, Skeleton } from "@chakra-ui/react";
import RectangleCard from "../../Components/Cards/RectangleCard";
import { FetchPokemonDetail } from "../../Hooks/FetchPokemonDetail";

function Home() {
    const {
        data: pokemon,
        isLoading: isLoadingPokemon,
        isError: isErrorPokemon,
        error: errorPokemon,
    } = FetchPokemonDetail(10, true);




    return (
        <Box id="PageContainer" bgColor={"#F2F2F2"} minH={"100%"} px="8">
            <Box h={"100%"}>
                {/* HIghlighted Pokemon */}
                <Box pt="10" pb="2">
                    <Heading size={"lg"} fontWeight={"medium"}>
                        Highlight
                    </Heading>
                </Box>
                <Box mb={"4"}>

                    <Skeleton isLoaded={!isLoadingPokemon} rounded={"xl"}>
                        <RectangleCard pokemon={pokemon} />
                    </Skeleton>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
