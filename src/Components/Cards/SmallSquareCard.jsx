import { Button, ButtonGroup, Card, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { AiFillHeart, AiFillInfoCircle, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { CapitalizeFirstLetter } from '../../Helpers/StringFunction';
import Toast from '../Toast/Toast';
import { UpdateFavoritePokemon } from '../../Hooks/UpdateFavoritePokemon';
import { useSelector } from "react-redux";
import { likeFilter } from '../../Helpers/CheckIsLiked';
import "../../App.css"


function SmallSquareCard(props) {
    const navigate = useNavigate();
    const favouritePokemonList = useSelector((state) => state.favouriteReducer.data);
    const { onBtnLike, likeLoading, unlikeLoading, iserror, errorMessage } = UpdateFavoritePokemon();

    const filterResult = likeFilter(favouritePokemonList, props.pokemondata?.id)


    return (
        <Card className='small-square-card'
            justifyContent={"center"}
            alignItems={"center"}
            rounded='xl'
            h='190px'
            bgColor={'#0E1F40'}
        >

            <Image
                objectFit='cover'
                w={'120px'}
                h={'120px'}
                src={props.pokemondata?.sprites?.other?.['official-artwork']?.front_default}
                alt='pokemon image'
                onClick={() => navigate(`/detail/${props.pokemondata?.id}`)}
                cursor='pointer'
                _hover={{ transform: 'scale(1.1)' }}
            />
            <Heading size='sm' mb='2' color={'white'}>{CapitalizeFirstLetter(props.pokemondata?.name)}</Heading>
            <ButtonGroup size='xs' bgColor={'#263C66'} rounded='full' px='4' alignItems={'center'}>
                <Button _hover={{ transform: 'scale(1.3)' }} _active='none' color='white' bgColor='transparent' isLoading={likeLoading || unlikeLoading ? true : false} onClick={() => onBtnLike(props.pokemondata?.id)}>
                    {
                        filterResult.length == 0 ? <AiOutlineHeart style={{ color: 'white', fontSize: '15px' }} /> : <AiFillHeart style={{ color: 'red', fontSize: '15px' }} />
                    }

                </Button>
                <Button _hover={{ transform: 'scale(1.2)' }} _active='none' bgColor='transparent' onClick={() => navigate(`/detail/${props.pokemondata?.id}`)}>
                    <AiFillInfoCircle style={{ color: 'white', fontSize: '15px' }} />
                </Button>
            </ButtonGroup>

            {!iserror ? null : <Toast title="Error" description={errorMessage} status="error" />}

        </Card>
    );
}

export default SmallSquareCard;