import { Box, Flex, Heading, SimpleGrid, Skeleton, Spinner } from "@chakra-ui/react";
import RectangleCard from "../../Components/Cards/RectangleCard";
import { FetchPokemonDetail } from "../../Hooks/FetchPokemonDetail";
import { FetchAllPokemonQuery } from "../../Hooks/FetchAllPokemon";
import { useEffect } from "react";
import SmallSquareCard from "../../Components/Cards/SmallSquareCard";



function Home() {
    const {
        data: pokemon,
        isLoading: isLoadingPokemon,
        isError: isErrorPokemon,
        error: errorPokemon,
    } = FetchPokemonDetail(10, true);

    const { data: allPokemons,
        error: allPokemonsError,
        fetchNextPage,
        isFetching,
        isFetchingNextPage,
    } = FetchAllPokemonQuery();

    useEffect(() => {
        const onScroll = async (event) => {
            const { scrollHeight, scrollTop, clientHeight } =
                event.target.scrollingElement;

            if (scrollHeight - scrollTop <= clientHeight * 1.5) {
                await fetchNextPage();
            }
        };

        document.addEventListener("scroll", onScroll);
        return () => document.removeEventListener("scroll", onScroll)
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])







    return (
        <Box id="PageContainer" bgColor={"#F2F2F2"} px="8">
            <Box >
                {/* Highlighted Pokemon */}
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

                {/* All Pokemon */}
                <Heading size='lg' fontWeight={'medium'} mb={"2"}>
                    Pokemons
                </Heading>
                <Box mb={"4"} >
                    <SimpleGrid columns={2} spacing={5}>
                        {
                            allPokemons?.pages?.map((arr) => {
                                return arr.allPokemonData.map((val) => {
                                    return (
                                        <Skeleton isLoaded={!isLoadingPokemon} rounded='xl' key={val.id}>
                                            <SmallSquareCard pokemondata={val} />
                                        </Skeleton>
                                    )
                                })
                            })
                        }
                    </SimpleGrid>
                </Box>


            </Box>
            {isFetching && allPokemons ?
                <Flex w="full" justifyContent="center"
                    alignItems="center" >
                    <Spinner thickness='5px'
                        speed='0.65s' color="#0E1F40" size={"xl"} />
                </Flex>
                : null}
        </Box>
    );
}

export default Home;
