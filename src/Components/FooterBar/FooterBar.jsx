import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { TbPokeball } from 'react-icons/tb';
import { BsFillBookmarkFill, BsArrowUpCircle } from 'react-icons/bs';
import { BiUpArrowCircle } from 'react-icons/bi';
import { useState } from "react";
import { ScrollToTop } from "../../Helpers/ScrollToTop";


function FooterBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const [visible, setVisible] = useState(false)

    let showFooter;

    if (location.pathname === '/') {
        showFooter = true
    } else if (location.pathname.includes('/detail')) {
        showFooter = true
    } else if (location.pathname === '/favourite') {
        showFooter = true
    } else {
        showFooter = false
    }

    document.addEventListener('scroll', () => {
        const VerticalHeight = window.scrollY    // Getting vertical scrollbar position
        if (VerticalHeight !== 0) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    })




    function NavigateToHome() {
        navigate("/");
        ScrollToTop();
    }

    function NavigateFavourite() {
        navigate("/favourite");
        ScrollToTop();
    }

    return (
        <Flex w={"full"} justifyContent={"center"} position={"relative"} display={showFooter ? "flex" : "none"}>
            <Flex border={"1px"} borderColor={"gray.500"} rounded={"xl"} bgColor={'#0E1F40'} shadow='2xl' position='fixed' bottom={'5'} justifyContent='space-evenly' w={{ base: '75%', sm: '350px', md: '350px' }} py='2'>
                <Button _hover={{ transform: 'scale(1.2)' }} _active='none' bgColor={'#0E1F40'} py='7' onClick={NavigateToHome} >
                    <Flex flexDir={"column"} alignItems={"center"}>
                        <TbPokeball fontSize={"35"} color={location.pathname === "/" ? "white" : "gray"} />
                        <Text fontSize={"xs"} color={location.pathname === "/" ? "white" : "gray"} >Home</Text>
                    </Flex>
                </Button>

                <Button _hover={{ transform: 'scale(1.2)' }} _active='none' bgColor={'#0E1F40'} py='7' onClick={NavigateFavourite} >
                    <Flex flexDir={"column"} alignItems={"center"}>
                        <BsFillBookmarkFill fontSize={"35"} color={location.pathname === "/favourite" ? "white" : "gray"} />
                        <Text fontSize={"xs"} color={location.pathname === "/favourite" ? "white" : "gray"} >Favourites</Text>
                    </Flex>
                </Button>
                <Box _hover={{ transform: 'scale(1.2)' }} pos={"absolute"} right={'-3'} top='-5' display={visible ? 'block' : "none"}>
                    <IconButton icon={<BiUpArrowCircle />} onClick={ScrollToTop} fontSize='4xl' variant={'unstyled'} color='#ff7a2e' bgColor={"inherit"} />
                </Box>

            </Flex>

        </Flex>
    );
}

export default FooterBar;