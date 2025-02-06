import React, { useState } from "react"
import { Box, Typography, Button, Grid2, Paper } from "@mui/material"
import { styled } from "@mui/material/styles";
import FormComponent from "./form";


const ControlsGrid = styled(Grid2)(({ theme }) => ({
    height: '80vh',
    borderRight:'1px solid #e4eaf019',
}));
const CustomButton = styled(Button)(({ theme,selected}) => ({
    width:'50%',
    color: selected ? 'white' :'rgb(179 190 193)',
    borderRadius:'0px',
    overflow: 'hidden',
    height:'50px',
    borderBottom: selected ? '2px solid  #00FF8C' :'1px solid #e4eaf019',
     textTransform:'capitalize',
     fontWeight:'bold',
}));


export default function ControlsComponent(props) {
    const [selectedtab, setSelectedtab] = React.useState(0);

    const handleTabChange = (newValue) => {
        setSelectedtab(newValue);
    };
    const tabsData = [
        {label:'Auto Form',
            component: FormComponent
        },
        {label:'Manual Form',
            component: FormComponent
        },
    ]
    let ActiveComponent = tabsData[selectedtab]?.component;

    return <ControlsGrid item size={4}>
        <Box sx={{ width: '100%' }}>
        <CustomButton 
         selected={selectedtab === 0}
         onClick={()=> handleTabChange(0)}>
             Manual
        </CustomButton>
        <CustomButton 
        selected={selectedtab === 1}
        onClick={()=> handleTabChange(1)}>
            Auto
        </CustomButton>
        <ActiveComponent 
        type={selectedtab === 1 ? 'auto':''}
       />
    </Box>
    </ControlsGrid>

}