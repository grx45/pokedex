import { Box, Heading, SimpleGrid, Skeleton } from "@chakra-ui/react";
import RectangleCard from "../../Components/Cards/RectangleCard";
import { FetchPokemonDetail } from "../../Hooks/FetchPokemonDetail";
import { FetchAllPokemonQuery } from "../../Hooks/FetchAllPokemon";
import { useEffect } from "react";
import SmallSquareCard from "../../Components/Cards/SmallSquareCard";
import Toast from "../../Components/Toast/Toast";


function Home() {

    const {
        data: pokemon,
        isLoading: isLoadingPokemon,
        isError: isErrorPokemon,
    } = FetchPokemonDetail(10, true);

    const {
        data: allPokemons,
        error: allPokemonsError,
        fetchNextPage,
        isFetching,
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
                        {
                            isFetching && allPokemons ? (<>
                                <Skeleton height={"190px"} rounded='xl' />
                                <Skeleton height={"190px"} rounded='xl' /></>) : null
                        }
                    </SimpleGrid>
                </Box>
            </Box>
            {!isErrorPokemon ? null : <Toast title={'error'} description={isErrorPokemon.message} status={"error"} />}
            {!allPokemonsError ? null : <Toast title={'error'} description={allPokemonsError.message} status={"error"} />}
        </Box>
    );
}

export default Home;
