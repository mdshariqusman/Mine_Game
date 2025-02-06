import React, { useState } from "react"
import { Box, Typography, Button, Grid2, Paper } from "@mui/material"
import { styled } from "@mui/material/styles";
import SliderComponent from "./slider";
import { useDispatch, useSelector } from "react-redux";
import { emptySelectedTiles, updateBetButtonValue ,updatCashout} from "./app/dataSlice";

const FormBox = styled(Box)(({ theme }) => ({
    padding: '20px'
}));
const BetButton = styled(Button)(({ theme, selected }) => ({
    mt: 2,
    py: 1.5,
    background: selected ? "linear-gradient(90deg, #7A5C38, #8F865B);" : "linear-gradient(90deg, #00FF8C, #A3C72E)",
    color: "black",
    fontWeight: "bold",
    borderRadius: 5,
    textTransform: 'none',
    height: '50px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
}));

export default function FormComponent({ type }) {
    const isClicked = useSelector((state) => state.data.gameStart);
    const seletedTiles = useSelector((state) => state.data.selectedTiles);
    const dispatch = useDispatch();

    const handleBetButton = () => {
        if(isClicked && seletedTiles === 0) return;
        dispatch(emptySelectedTiles());
        dispatch(updateBetButtonValue(!isClicked))
    }
    return <FormBox >
        <Typography sx={{color:'rgb(179 190 193)',mb:'3px',fontWeight:550}}>Mines</Typography>
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