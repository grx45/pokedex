import React from "react";
import noImage from "../../Assets/noImage.png";
import { Card, Image, Box, Text, Heading, Tag, TagLabel, ButtonGroup, Button, Divider, Center } from "@chakra-ui/react";
import { CapitalizeFirstLetter } from "../../Helpers/StringFunction";
import { PokemonColor } from "../../Helpers/PokemonColor";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { UpdateFavoritePokemon } from "../../Hooks/UpdateFavoritePokemon";



function FavouriteCard(props) {
    const navigate = useNavigate()

    const { onBtnLike } = UpdateFavoritePokemon()

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
            mb={'4'}
        >

            <Box mx="4px" w="28%" >
                <Image
                    objectFit="cover"
                    src={
                        props.favouritedata?.sprites?.other?.['official-artwork']?.front_default ? props.favouritedata?.sprites?.other?.['official-artwork']?.front_default : noImage
                    }
                    w="full"
                    h="100px"
                    alt="Pokemon"
                    cursor="pointer"
                    _hover={{ transform: 'scale(1.1)' }}
                    onClick={() => navigate(`/detail/${props.favouritedata?.id}`)}
                />
            </Box>
            <Center h="175px">
                <Divider orientation='vertical' />
            </Center>

            <Box width={"68%"} ml={2}>
                <Heading _hover={{ textDecoration: "underline" }} cursor={"pointer"} size='md' mb='2' onClick={() => navigate(`/detail/${props.favouritedata?.id}`)}>{CapitalizeFirstLetter(props.favouritedata?.name)}</Heading>
                <Box mb={'3'}>
                    {
                        props.favouritedata?.types?.map((val) => {
                            return (
                                <Tag size="md" borderRadius={"full"} key={val} variant={"solid"} bgColor={PokemonColor(val?.type?.name)} mr={'2'}>
                                    <TagLabel fontWeight={"bold"} fontSize={"xs"}>{CapitalizeFirstLetter(val?.type?.name)}</TagLabel>
                                </Tag>
                            )
                        })
                    }
                </Box>


                <Text mb="1" fontSize={"sm"} fontWeight={"bold"}>Weight : {props.favouritedata?.weight / 10} kg</Text>
                <Text mb="1" fontSize={"sm"} fontWeight={"bold"}>Height : {props.favouritedata?.height / 10} m</Text>
                <Text fontSize={"sm"} fontWeight={"bold"}>Abilities : {props.favouritedata?.abilities.map((val, idx) => {
                    return (
                        <span>{idx == props.favouritedata?.abilities.length - 1 ? CapitalizeFirstLetter(val?.ability?.name) : CapitalizeFirstLetter(val?.ability?.name) + ","} </span>
                    )
                })} </Text>



                <ButtonGroup justifyContent={"flex-end"} mt='2' w='full'>
                    <Button size={"xs"} _hover={{ transform: 'scale(1.2)' }} _active={"none"} color='white' bgColor='inherit' onClick={() => onBtnLike(props.favouritedata?.id)}>
                        <AiOutlineHeart style={{ color: 'white', fontSize: '18px' }} />
                    </Button>
                </ButtonGroup>



            </Box>
        </Card >
    );
}

export default FavouriteCard;
