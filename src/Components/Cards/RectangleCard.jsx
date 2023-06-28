import React from "react";
import noImage from "../../Assets/noImage.png";
import { Card, Image, Box, Text, Heading, Tag, TagLabel, ButtonGroup, Button } from "@chakra-ui/react";
import { CapitalizeFirstLetter } from "../../Helpers/StringFunction";
import { PokemonColor } from "../../Helpers/PokemonColor";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";


function RectangleCard(props) {
    const navigate = useNavigate();


    return (
        <Card
            color={"white"}
            direction={"row"}
            variant="outline"
            alignItems={"center"}
            bgColor="#0E1F40"
            p="5"
            rounded={"xl"}
        >

            <Box mx="4px" w="30%">

                <Image
                    objectFit="cover"
                    src={
                        props.pokemon?.sprites?.other?.['official-artwork']?.front_default ? props.pokemon?.sprites?.other?.['official-artwork']?.front_default : noImage
                    }
                    w="full"
                    h="100px"
                    alt="Pokemon"
                    cursor="pointer"
                    onClick={() => navigate(`/detail/${props.pokemondata?.id}`)}
                    _hover={{ transform: 'scale(1.1)' }}
                />
            </Box>


            <Box width={"70%"} ml={2}>
                <Heading w={"fit-content"} cursor={"pointer"} _hover={{ textDecoration: "underline" }} onClick={() => navigate(`/detail/${props.pokemondata?.id}`)} size='md' mb='2'>{CapitalizeFirstLetter(props.pokemon?.name)}</Heading>

                <Box>
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

                <ButtonGroup justifyContent={"flex-end"} mt='2' w='full'>

                    <Button _hover={{ transform: 'scale(1.2)' }} _active={"none"} color='white' bgColor='inherit'>
                        <AiOutlineHeart style={{ color: 'white', fontSize: '18px' }} />
                    </Button>
                    <Button style={{ transition: "all 0.2s ease 0s" }} variant={"outline"} border={"2px"} borderColor={"Yellow"} _active='none' bgColor='inherit' rounded='lg' textColor={'white'} _hover={{ transition: "all 0.2s ease 0s", borderColor: "#FF7A2E", textDecoration: "underline" }} onClick={() => navigate(`/detail/${props.pokemon?.id}`)}>
                        <Text fontSize={'sm'} fontWeight={"bold"}>View Details</Text>
                    </Button>
                </ButtonGroup>



            </Box>
        </Card >
    );
}

export default RectangleCard;
