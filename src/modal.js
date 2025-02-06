import React from "react";
import { Box, Typography, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BetButton } from "./components/form";
import { useSelector, useDispatch } from "react-redux";
import { updateModalValue } from "./components/app/dataSlice";

const ModalBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "#2d2d2d",
    color: "#fff",
    borderRadius: "12px",
    boxShadow: 24,
    p: 3,
    textAlign: "center",
    border: 'none',
    backgroundColor: 'rgb(83 94 95)',
    height: '150px',
    border: '3px solid rgb(41 45 46)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const CustomModal = () => {
    const message = useSelector((state) => state.data.message)
    const dispatch = useDispatch();

    return (
        <ModalBox>
            <Box>
                <Typography variant="h4" sx={{ color: message === 'You Won' ? "#50fa7b" : 'red', fontWeight: "bold" }}>
                    {message}
                </Typography>
                <BetButton sx={{ height: '38px' }} onClick={() => dispatch(updateModalValue(false))} variant="contained">Ok</BetButton>
            </Box>
        </ModalBox>
    );
};

export default CustomModal;
