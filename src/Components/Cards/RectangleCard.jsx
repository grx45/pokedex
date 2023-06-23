import React from "react";
import noImage from "../../Assets/noImage.png";
import { Card, Text, Image, Box, Skeleton } from "@chakra-ui/react";
import { CapitalizeFirstLetter } from "../../Helpers/CapitalizeFirstLetter";

function RectangleCard(props) {
    console.log("fetch data", props.pokemon);

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
                />

            </Box>


            <Box width={"70%"} ml={2}>

                <Text>{CapitalizeFirstLetter(props.pokemon?.name)}</Text>

            </Box>
        </Card>
    );
}

export default RectangleCard;
