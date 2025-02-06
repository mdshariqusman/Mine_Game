import React from "react"
import { Box, Grid2, } from "@mui/material"
import { styled } from "@mui/material/styles";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import KeyboardAltRoundedIcon from '@mui/icons-material/KeyboardAltRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

const FooterGrid = styled(Grid2)(({ theme }) => ({
  height:'10vh',
  backgroundColor: 'rgb(41 45 46)',
  padding: '24px',
  borderRadius:'0px 0px 12px 12px',
  borderTop:'1px solid #e4eaf019'
}));
const IconContainer= styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color:'rgb(179 190 193)',
  fontWeight:"600",
  cursor: 'pointer',
}));

export default function FooterComponent(props) {
    return <FooterGrid item size={12}>
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
         <Box sx={{display:'flex'}}>
          <IconContainer>
          <StarRateRoundedIcon fontSize="large" sx={{color:'rgb(179 190 193)',mb:"5px"}}/>
          9964639
          </IconContainer>
          <IconContainer>
          <FavoriteRoundedIcon sx={{color:'rgb(179 190 193)',marginLeft:'20px',marginRight:'3px'}}/>
          100043
          </IconContainer>
          <IconContainer>
          <SendRoundedIcon sx={{color:'rgb(179 190 193)',marginLeft:'20px'}}/>
          </IconContainer>
         </Box>
         <Box sx={{display:'flex'}}>
          <IconContainer>
          <MovieCreationRoundedIcon sx={{color:'rgb(179 190 193)'}}/>
          </IconContainer>
          <IconContainer>
          <MusicNoteRoundedIcon sx={{color:'rgb(179 190 193)',marginLeft:'20px'}}/>
          </IconContainer>
          <IconContainer>
          <VolumeUpRoundedIcon sx={{color:'rgb(179 190 193)',marginLeft:'20px'}}/>
          </IconContainer>
          <IconContainer>
          <KeyboardAltRoundedIcon sx={{color:'rgb(179 190 193)',marginLeft:'20px'}}/>
          </IconContainer>
          <IconContainer>
          <QueryStatsRoundedIcon sx={{color:'rgb(179 190 193)',marginLeft:'20px'}}/>
          </IconContainer>
          <IconContainer>
          <AdminPanelSettingsRoundedIcon sx={{color:'rgb(179 190 193)',marginLeft:'20px'}}/>
          </IconContainer>
          <IconContainer>
          <HelpOutlineRoundedIcon sx={{color:'rgb(179 190 193)',marginLeft:'20px'}}/>
          </IconContainer>
         </Box>
         </Box>
    </FooterGrid>

}