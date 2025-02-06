import React, { useState } from "react"
import { Box, Typography, Button, Grid2, Paper } from "@mui/material"
import { styled } from "@mui/material/styles";
import SliderComponent from "./slider";
import { useDispatch, useSelector } from "react-redux";
import { emptySelectedTiles, updateBetButtonValue,updatGamerOver ,updateModalValue,updateMessage} from "./app/dataSlice";

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
    boxShadow: selected ? '': '0 0 12px #23ee884d,0 -2px #1dca6a inset',
    '&:hover': {
        boxShadow: selected ? '' : '0 0 12px #23ee884d,0 -2px #1dca6a inset',
    }
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
        <Typography sx={{ color: 'rgb(179 190 193)', mb: '8px', fontWeight: 550 }}>Mines</Typography>
        <SliderComponent />
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