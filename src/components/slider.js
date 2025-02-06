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
    backgroundColor: "linear-gradient(90deg, #00FF8C, #A3C72E)",
  },
  "& .MuiSlider-rail": {
    opacity: 1,
    backgroundColor: "#444",
  },
});

const SliderComponent = () => {
  const dispatch = useDispatch();
  const sliderValue = useSelector((state)=> state.data.sliderValue);
  const gameStarted = useSelector((state)=> state.data.gameStart);
  const handleChange = (event, newValue) => {
      dispatch(updateSliderValue(newValue))
  };

  return (
    <Box
      sx={{
        width: '100%',
        padding: 2,
        backgroundColor: "#2a2a2a",
        borderRadius: 3,
        color: "white",
        marginBottom:'20px'
      }}
    >
      <Box display="flex" alignItems="center">
        <Typography
          variant="body2"
          sx={{ width: 30, textAlign: "center", marginRight: "5px" }}
        >
          {sliderValue}
        </Typography>
        <CustomSlider value={sliderValue} disabled={gameStarted} onChange={handleChange} min={1} max={24} />
        <Typography
          variant="body2"
          sx={{ width: 30, textAlign: "center", marginLeft: "8px" }}
        >
          24
        </Typography>
      </Box>
    </Box>
  );
};

export default SliderComponent;
