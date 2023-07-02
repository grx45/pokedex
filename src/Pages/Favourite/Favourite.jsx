import { useNavigate, useParams } from "react-router-dom";
import { FetchPokemonDetail } from "../../Hooks/FetchPokemonDetail";
import { Box, Heading, Skeleton, Text } from "@chakra-ui/react";
import { FaLessThan } from 'react-icons/fa';
import { CapitalizeFirstLetter, ReplaceSpecial } from "../../Helpers/StringFunction";
import RectangleVerticleLine from "../../Components/Cards/RectangleVertivalLine";
import Toast from "../../Components/Toast/Toast"
import { useEffect } from "react";
import { ScrollToTop } from "../../Helpers/ScrollToTop";
import FavouriteCard from "../../Components/Cards/FavouriteCard";
import { FetchFavouritePokemon } from "../../Hooks/FetchFavouritePokemon";
import { FavouriteReducerData } from "../../Helpers/DataFromReducer";

function Favourite() {

    const favouritePokemonList = FavouriteReducerData();

    const {
        data,
        isLoading,
        refetch,
        isError,
        error,
    } = FetchFavouritePokemon(favouritePokemonList);

    console.log(data)

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

            <FavouriteCard />

            <Text textAlign={"center"} color={"black"}> There are number pokemon in your favourites list</Text>

        </Box>
    );
}

export default Favourite;