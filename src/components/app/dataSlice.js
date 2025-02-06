import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliderValue: 1,
  gameStart: false,
  formData: null,
  selectedTiles: 0,
  modalValue: false,
  message: 'You Won',
  icon: '',
  cashOut: false,
  gameOver: false,
}

export const dataSlice = createSlice({
  name: 'mine',
  initialState,
  reducers: {
    updateSliderValue: (state, action) => {
      state.sliderValue = action.payload
    },
    updateBetButtonValue: (state, action) => {
      state.gameStart = action.payload
    },
    updateFormValue: (state, action) => {
      state.formData = action.payload
    },
    updateSelectedTiles: (state, action) => {
      state.selectedTiles = state.selectedTiles + 1;
    },
    updatGamerOver: (state, action) => {
      state.gameOver = action.payload;
    },
    updateModalValue: (state, action) => {
      state.modalValue = action.payload;
    },
    emptySelectedTiles: (state, action) => {
      state.selectedTiles = 0;
    },
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
  },
})

export const { updateBetButtonValue,
  updateFormValue,
  updateSliderValue,
  updateSelectedTiles,
  updatGamerOver,
  emptySelectedTiles,
  updateMessage,
  updateModalValue } = dataSlice.actions;
export default dataSlice.reducer;