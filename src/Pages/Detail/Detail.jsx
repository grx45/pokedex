import { useNavigate, useParams } from "react-router-dom";
import { FetchPokemonDetail } from "../../Hooks/FetchPokemonDetail";
import { Box, Button, Divider, Flex, Heading, Card, Image, Skeleton, SimpleGrid, Text, Progress } from "@chakra-ui/react";
import { FaLessThan } from 'react-icons/fa';
import { CapitalizeFirstLetter, ReplaceSpecial } from "../../Helpers/StringFunction";
import RectangleVerticleLine from "../../Components/Cards/RectangleVertivalLine";
import Toast from "../../Components/Toast/Toast"
import { useEffect } from "react";
import { ScrollToTop } from "../../Helpers/ScrollToTop";



function Detail() {

    const params = useParams();
    const navigate = useNavigate();

    const {
        data,
        isLoading,
        isError,
        error
    } = FetchPokemonDetail(params.id);


    useEffect(() => {
        ScrollToTop()
    }, [])

    return (
        <Box bgColor={'#F2F2F2'} minH={'100vh'} px='4'>
            <Flex pt='10' pb='2' gap={'4'} alignItems='center' mb="2">
                <Button variant={'unstyled'} textAlign='center' alignItems={'center'} size='xs'
                    onClick={() => navigate('/')}>
                    <FaLessThan style={{ fontSize: '25px', margin: 'auto', }} />
                </Button>
                <Heading size='lg' fontWeight={'semibold'}>
                    {CapitalizeFirstLetter(data?.name)}
                </Heading>
            </Flex>
            <Divider borderWidth={"1px"} borderColor={"blackAlpha.500"} mb={"4"} />


            <Skeleton isLoaded={!isLoading} rounded='xl' mb="4">
                <RectangleVerticleLine pokemon={data} />
            </Skeleton>
            <Heading mb={'2'} fontWeight={"semibold"}>Stats</Heading>
            <Divider borderWidth={"1px"} borderColor={"blackAlpha.500"} mb={"4"} />
            <SimpleGrid columns={2} spacing={2} alignItems='center' mt='2'>
                {
                    data?.stats.map((val, idx) => {
                        return (
                            <>
                                <Skeleton isLoaded={!isLoading} >
                                    <Flex justifyContent={"space-between"}>
                                        <Text>{CapitalizeFirstLetter(ReplaceSpecial(val.stat.name))}: </Text>
                                        <Text fontWeight={"semibold"}>{val.base_stat}</Text>
                                    </Flex>
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                    <Box><Progress bgColor='#091733' colorScheme={val.base_stat >= 50 ? "green" : "orange"} value={val.base_stat} /></Box>
                                </Skeleton>
                            </>
                        )
                    })
                }
            </SimpleGrid>
            {!isError ? null : <Toast title={"error"} description={error.message} status={'error'} />}
        </Box >


    );
}

export default Detail;