import React, { useState } from "react"
import { Box, Typography, Button, Grid2, Paper } from "@mui/material"
import { styled } from "@mui/material/styles";
import ControlsComponent from "./controlsComp";
import MineGameComponent from "./gameComp";
import FooterComponent from "./footer";

const Container = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgb(51 56 57)',
    margin: '35px 80px',
    height: '90vh',
    borderRadius: '12px',
    color: '#fff',
    overflow: 'hidden'
}));

export default function MineGame() {
    return <Container elevation={2}>
        <Grid2 container>
            <ControlsComponent />
            <MineGameComponent />
            <FooterComponent />
        </Grid2 >
    </Container>
}