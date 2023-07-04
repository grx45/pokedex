import React from "react";
import noImage from "../../Assets/noImage.png";
import { Card, Image, Box, Text, Heading, Tag, TagLabel, ButtonGroup, Button, Divider, Center } from "@chakra-ui/react";
import { CapitalizeFirstLetter } from "../../Helpers/StringFunction";
import { PokemonColor } from "../../Helpers/PokemonColor";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Toast from "../Toast/Toast";
import { UpdateFavoritePokemon } from "../../Hooks/UpdateFavoritePokemon";
import { useSelector } from "react-redux";
import { likeFilter } from "../../Helpers/CheckIsLiked";


function RectangleVerticleLine(props) {

    const favouritePokemonList = useSelector((state) => state.favouriteReducer.data);
    const { onBtnLike, likeLoading, unlikeLoading, iserror, errorMessage } = UpdateFavoritePokemon()
    const filterResult = likeFilter(favouritePokemonList, props.pokemon?.id)

    return (
        <Card
            color={"white"}
            direction={"row"}
            variant="outline"
            alignItems={"center"}
            bgColor="#0E1F40"
            p="5"
            rounded={"xl"}
            gap={"10px"}
        >

            <Box mx="4px" w="28%" >
                <Image
                    objectFit="cover"
                    src={
                        props.pokemon?.sprites?.other?.['official-artwork']?.front_default ? props.pokemon?.sprites?.other?.['official-artwork']?.front_default : noImage
                    }
                    w="full"
                    h="100px"
                    alt="Pokemon"
                    cursor="pointer"
                />
            </Box>
            <Center h="200px">
                <Divider orientation='vertical' />
            </Center>

            <Box width={"68%"} ml={2}>
                <Heading size='md' mb='2'>{CapitalizeFirstLetter(props.pokemon?.name)}</Heading>
                <Box mb={'3'}>
                    {
                        props.pokemon?.types?.map((val) => {
                            return (
                                <Tag size="md" borderRadius={"full"} key={val} variant={"solid"} bgColor={() => PokemonColor(val?.type?.name)} mr={'2'}>
                                    <TagLabel fontWeight={"bold"} fontSize={"xs"}>{CapitalizeFirstLetter(val?.type?.name)}</TagLabel>
                                </Tag>
                            )
                        })
                    }
                </Box>

                <Text mb="1" fontSize={"sm"} fontWeight={"bold"}>Weight : {props.pokemon?.weight / 10} kg</Text>
                <Text mb="1" fontSize={"sm"} fontWeight={"bold"}>Height : {props.pokemon?.height / 10} m</Text>
                <Text fontSize={"sm"} fontWeight={"bold"}>Abilities : {props.pokemon?.abilities.map((val, idx) => {
                    return (
                        <span>{idx == props.pokemon?.abilities.length - 1 ? CapitalizeFirstLetter(val?.ability?.name) : CapitalizeFirstLetter(val?.ability?.name) + ","} </span>
                    )
                })} </Text>
                <ButtonGroup justifyContent={"flex-end"} mt='2' w='full'>
                    <Button size={"xs"} _hover={{ transform: 'scale(1.2)' }} _active={"none"} color='white' bgColor='inherit' isLoading={likeLoading || unlikeLoading ? true : false} onClick={() => onBtnLike(props.pokemon?.id)}>
                        {
                            filterResult.length == 0 ? <AiOutlineHeart style={{ color: 'white', fontSize: '18px' }} /> : <AiFillHeart style={{ color: 'red', fontSize: '18px' }} />
                        }
                    </Button>
                </ButtonGroup>

            </Box>

            {!iserror ? null : <Toast title="Error" description={errorMessage} status="error" />}
        </Card >
    );
}

export default RectangleVerticleLine;
