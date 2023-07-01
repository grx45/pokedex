import React from "react";
import noImage from "../../Assets/noImage.png";
import { Card, Image, Box, Text, Heading, Tag, TagLabel, ButtonGroup, Button, Divider, Center } from "@chakra-ui/react";
import { CapitalizeFirstLetter } from "../../Helpers/StringFunction";
import { PokemonColor } from "../../Helpers/PokemonColor";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

function FavouriteCard(props) {

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
                <Heading size='md' mb='2'>{CapitalizeFirstLetter("name")}</Heading>
                <Box mb={'3'}>
                    {
                        props.pokemon?.types?.map((val) => {
                            return (
                                <Tag size="md" borderRadius={"full"} key={val} variant={"solid"} bgColor={"yellow.500"} mr={'2'}>
                                    <TagLabel fontWeight={"bold"} fontSize={"xs"}>{CapitalizeFirstLetter("pokemon type")}</TagLabel>
                                </Tag>
                            )
                        })
                    }
                </Box>


                {/* <Text mb="1" fontSize={"sm"} fontWeight={"bold"}>Weight : {props.pokemon?.weight / 10} kg</Text>
                <Text mb="1" fontSize={"sm"} fontWeight={"bold"}>Height : {props.pokemon?.height / 10} m</Text> */}
                <Text fontSize={"sm"} fontWeight={"bold"}>Abilities  </Text>



                <ButtonGroup justifyContent={"flex-end"} mt='2' w='full'>
                    <Button size={"xs"} _hover={{ transform: 'scale(1.2)' }} _active={"none"} color='white' bgColor='inherit'>
                        <AiOutlineHeart style={{ color: 'white', fontSize: '18px' }} />
                    </Button>
                </ButtonGroup>



            </Box>
        </Card >
    );
}

export default FavouriteCard;
