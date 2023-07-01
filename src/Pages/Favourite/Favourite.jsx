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

function Favourite() {
    return (
        <Box bgColor={'#F2F2F2'} minH={'100vh'} px='4'>
            <Heading pt='10' pb='2' size='lg' fontWeight={'semibold'}>
                {CapitalizeFirstLetter("Favourites")}
            </Heading>

            <FavouriteCard />

            <Text textAlign={"center"} color={"black"}> There are number pokemon in your favourites list</Text>

        </Box>
    );
}

export default Favourite;