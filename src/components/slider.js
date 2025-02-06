import React from "react";
import { Slider, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from 'react-redux'
import { updateSliderValue } from "./app/dataSlice";

const CustomSlider = styled(Slider)({
  color: "limegreen",
  height: 10,
  "& .MuiSlider-thumb": {
    borderRadius: "8px",
    height: 24,
    width: 18,
    backgroundColor: "#fff",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    background: "linear-gradient(90deg,#24ee89,#9fe871)",
  },
  "& .MuiSlider-rail": {
    opacity: 1,
    backgroundColor: "#444",
  },
});

const SliderComponent = () => {
  const dispatch = useDispatch();
  const sliderValue = useSelector((state) => state.data.sliderValue);
  const gameStarted = useSelector((state) => state.data.gameStart);
  const handleChange = (event, newValue) => {
    dispatch(updateSliderValue(newValue))
  };

  return (
    <Box
      sx={{
        padding: '4px',
        width: '100%',
        backgroundColor: "#2a2a2a",
        borderRadius: 2,
        color: "white",
        marginBottom: '20px'
      }}
    >
      <Box display="flex" alignItems="center">
        <Typography
          variant="body2"
          sx={{ width: 30, textAlign: "center", marginRight: "5px", color: 'white', fontWeight: 600 }}
        >
          {sliderValue}
        </Typography>
        <CustomSlider value={sliderValue} disabled={gameStarted} onChange={handleChange} min={1} max={24} />
        <Typography
          variant="body2"
          sx={{ width: 30, textAlign: "center", marginLeft: "8px", color: 'rgb(179 190 193)', fontWeight: 600 }}
        >
          24
        </Typography>
      </Box>
    </Box>
  );
};

export default SliderComponent;
