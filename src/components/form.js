import React, { useState } from "react"
import { Box, Typography, Button, Grid2, Paper } from "@mui/material"
import { styled } from "@mui/material/styles";
import SliderComponent from "./slider";
import { useDispatch, useSelector } from "react-redux";
import { emptySelectedTiles, updateBetButtonValue, updatGamerOver, updateModalValue, updateMessage } from "./app/dataSlice";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Image from "next/image";

const FormBox = styled(Box)(({ theme }) => ({
    padding: '20px'
}));
export const BetButton = styled(Button)(({ theme, selected }) => ({
    mt: 2,
    py: 1.5,
    background: selected ? "linear-gradient(90deg, #7A5C38, #8F865B)" : "linear-gradient(90deg,#24ee89,#9fe871)",
    color: "black",
    fontWeight: "bold !important",
    borderRadius: 5,
    textTransform: 'none',
    height: '50px',
    boxShadow: selected ? '' : '0 0 12px #23ee884d,0 -2px #1dca6a inset',
    '&:hover': {
        boxShadow: selected ? '' : '0 0 12px #23ee884d,0 -2px #1dca6a inset',
    }
}));
const FlexBox = styled(Box)(({ theme, selected }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    color: 'rgb(179 190 193)',
}));

const RowContainer = styled(Box)(({ theme, selected }) => ({
    border: "1px solid rgb(58 65 66)",
    backgroundColor: "rgb(41 45 46)",
    height: '40px',
    width: '100%',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '8px',
    paddingRight: '3px',
    justifyContent: 'space-between'
}));
const BlackChipBox = styled(Box)(({ theme, selected }) => ({
    height: '31px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
    backgroundColor: 'rgb(58 65 66)',
    border: 'none',
    borderRadius: '5px',
    margin: '2px',
    width: '50px'
}));
const GreyChipBox = styled(Box)(({ theme, selected }) => ({
    height: '31px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 700,
    backgroundColor: 'rgb(58 65 66)',
    border: 'none',
    borderRadius: '5px',
    margin: '2px',
    width: '24%',
    color: 'rgb(179 190 193)'
}));


export default function FormComponent({ type }) {
    const isClicked = useSelector((state) => state.data.gameStart);
    const seletedTiles = useSelector((state) => state.data.selectedTiles);
    const dispatch = useDispatch();

    const handleBetButton = () => {
        if (isClicked && seletedTiles === 0) return;
        else if (isClicked && seletedTiles) {
            dispatch(updatGamerOver(true));
            dispatch(updateModalValue(true))
            dispatch(updateMessage('You Won'))
            dispatch(emptySelectedTiles());
            dispatch(updateBetButtonValue(!isClicked))
        }
        else {
            dispatch(updateModalValue(false))
            dispatch(emptySelectedTiles());
            dispatch(updateBetButtonValue(!isClicked))
        }
    }
    return <FormBox >
        <FlexBox>
            <Box component='span' sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                Amount
                <InfoOutlinedIcon fontSize="small" sx={{ marginLeft: '8px', color: 'rgb(36, 238, 137)' }} />
            </Box>
            <Box component='span' sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                ≈0BCD
            </Box>
        </FlexBox>
        <RowContainer sx={{ mt: '10px', mb: '3px' }}>
            <Box component='span' sx={{ display: 'flex', alignItems: 'center', fontWeight: 600 }}>
                <Image src={'/assets/indian_flag.webp'} height={25} width={25} />
                <Box ml='10px'>0</Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <BlackChipBox>1/2</BlackChipBox>
                <BlackChipBox>2X</BlackChipBox>
                <BlackChipBox>^</BlackChipBox>
            </Box>
        </RowContainer>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <GreyChipBox>10</GreyChipBox>
            <GreyChipBox>100</GreyChipBox>
            <GreyChipBox>1.0K</GreyChipBox>
            <GreyChipBox>10.0K</GreyChipBox>
        </Box>
        <Typography sx={{ color: 'rgb(179 190 193)', mb: '8px', fontWeight: 600 }}>Mines</Typography>
        <SliderComponent />
        {/* Only for the auto tab */}
        {type === 'auto' && (
            <Box mt="8px">
                <FlexBox>
                    <Box component='span' sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                        Number of Bets
                    </Box>
                </FlexBox>
                <RowContainer sx={{ mt: '10px', mb: '3px' }}>
                    <Box component='span' sx={{ display: 'flex', alignItems: 'center', fontWeight: 600 }}>
                        ∞
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <BlackChipBox>∞</BlackChipBox>
                        <BlackChipBox>10</BlackChipBox>
                        <BlackChipBox>100</BlackChipBox>
                    </Box>
                </RowContainer>
                <FlexBox sx={{ mt: '14px' }}>
                    <Box component='span' sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                        Stop on win
                    </Box>
                    <Box component='span' sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                        ≈0BCD
                    </Box>
                </FlexBox>
                <RowContainer sx={{ mt: '10px', mb: '3px' }}>
                    <Box component='span' sx={{ display: 'flex', alignItems: 'center', fontWeight: 600 }}>
                        <Image src={'/assets/indian_flag.webp'} height={25} width={25} />
                        <Box ml='10px'>0</Box>
                    </Box>
                </RowContainer>
                <FlexBox sx={{ mt: '14px' }}>
                    <Box component='span' sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                        Stop on loss
                    </Box>
                    <Box component='span' sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                        ≈0BCD
                    </Box>
                </FlexBox>
                <RowContainer sx={{ mt: '10px', mb: '18px' }}>
                    <Box component='span' sx={{ display: 'flex', alignItems: 'center', fontWeight: 600 }}>
                        <Image src={'/assets/indian_flag.webp'} height={25} width={25} />
                        <Box ml='10px'>0</Box>
                    </Box>
                </RowContainer>
            </Box>
        )}
        <BetButton
            fullWidth
            variant="contained"
            selected={isClicked}
            onClick={handleBetButton}
        >
            {isClicked ? "Cash out" : "Bet"}
        </BetButton>
    </FormBox>

}