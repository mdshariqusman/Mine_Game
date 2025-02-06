import React, { useState, useEffect } from "react"
import { Box, Grid2, } from "@mui/material"
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { updateBetButtonValue, updateSelectedTiles, updatGamerOver, emptySelectedTiles,updateMessage,updateModalValue } from "./app/dataSlice";
import CustomModal from "../modal";

const GameGrid = styled(Grid2)(({ theme }) => ({
    height: '80vh',
    padding: '24px',
    borderRadius: "0px 12px 0px 0px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/assets/bg_image.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
}));
const GridLayout = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 80px)',
    gap: '8px',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: 'rgb(41 45 46)'
}));
const SquareBox = styled(Box)(({ theme }) => ({
    height: '80px',
    width: '80px',
    backgroundColor: 'rgb(68, 76, 77)',
    borderRadius: '8px',
    '&:hover': {
        backgroundColor: 'rgb(83 94 95)',
    },
    cursor: 'pointer',
}));

function SquareContainer({ mine }) {
    const isClicked = useSelector((state) => state.data.gameStart);
    const isGameOver = useSelector((state) => state.data.gameOver);
    const isCashout = useSelector((state) => state.data.cashOut);
    const data = useSelector((state) => state.data);
    const [icon, setIcon] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        if (isGameOver && !icon) {
            dispatch(emptySelectedTiles());
            dispatch(updateBetButtonValue(false))
            dispatch(updatGamerOver(false));
            if (mine) {
                setIcon(<Image style={{ opacity: '0.3' }} src={'/assets/bomb_icon.webp'} height={75} width={75} />)
            }
            else {
                setIcon(<Image style={{ opacity: '0.3' }} src={'/assets/dimond_icon.webp'} height={75} width={75} />)
            }
        }
        if (isClicked && !isGameOver) setIcon('');
    }, [isGameOver, isClicked, isCashout])

    const handleSetImage = () => {
        if (!isClicked) return;
        if (mine) {
            setIcon(<Image src={'/assets/bomb_icon.webp'} height={75} width={75} />)
            dispatch(updatGamerOver(true));
            dispatch(updateModalValue(true))
            dispatch(updateMessage('Game Over'))

        }
        else {
            setIcon(<Image src={'/assets/dimond_icon.webp'} height={75} width={75} />)
            dispatch(updateSelectedTiles());
        }
    }
    return <SquareBox
        onClick={handleSetImage}>
        {icon}
    </SquareBox>
}
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function MineGameComponent(props) {
    const sliderValue = useSelector((state) => state.data.sliderValue);
    const showModal = useSelector((state) => state.data.modalValue);
    let randomNum = [];
    const array = new Array(25).fill(0).map((item, index) => index + 1);

    while (randomNum.length < sliderValue) {
        let tempNum = getRandomNumber(1, 25);
        if (!randomNum.includes(tempNum)) {
            randomNum.push(tempNum);
        }
    }
    return <GameGrid item size={8}>
        <Box sx={{ position: 'absolute', top: 47, right: 200 }}>
            <Image src={'/assets/card_image.webp'} width={150} height={50} />
        </Box>
        <GridLayout>
            {array.map((item, index) => {
                return <SquareContainer mine={randomNum.includes(item)} key={index} />
            })}
        </GridLayout>
        {showModal && <CustomModal />}
    </GameGrid>

}