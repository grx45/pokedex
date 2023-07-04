import { Box, Heading, Skeleton, Text } from "@chakra-ui/react";
import { CapitalizeFirstLetter } from "../../Helpers/StringFunction";
import Toast from "../../Components/Toast/Toast"
import { useEffect } from "react";
import FavouriteCard from "../../Components/Cards/FavouriteCard";
import { FetchFavouritePokemon } from "../../Hooks/FetchFavouritePokemon";
import { useSelector } from "react-redux";

function Favourite() {
    const favouritePokemonList = useSelector((state) => state.favouriteReducer.data);

    const {
        data,
        isLoading,
        refetch,
        isError,
        error,
    } = FetchFavouritePokemon(favouritePokemonList);

    useEffect(() => {
        if (favouritePokemonList) {
            refetch()
        }
    }, [favouritePokemonList])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Box bgColor={'#F2F2F2'} minH={'100vh'} px='4'>
            <Heading pt='10' pb='2' size='lg' fontWeight={'semibold'}>
                {CapitalizeFirstLetter("Favourites")}
            </Heading>
            {data?.map((val) => {
                return (
                    <Skeleton isLoaded={!isLoading} rounded='xl' key={val.id}>
                        <FavouriteCard favouritedata={val} />
                    </Skeleton>
                )
            })}
            <Text textAlign={"center"} color={"black"}> There are {favouritePokemonList.length} pokemon in your favourites list</Text>
            {!isError ? null : <Toast title="Error" description={error.message} status="error" />}
        </Box>
    );
}

export default Favourite;