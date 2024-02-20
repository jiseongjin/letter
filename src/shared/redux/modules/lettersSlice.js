import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {
    getLetters: (state, action) => {
      return (state = action.payload);
    },
    addLetters: (state, action) => {
      return [action.payload, ...state];
    },
  },
});

export default lettersSlice.reducer;
export const { getLetters, addLetters } = lettersSlice.actions;
