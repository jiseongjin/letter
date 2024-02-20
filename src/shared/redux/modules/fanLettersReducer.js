import { createSlice } from "@reduxjs/toolkit";
import fakeData from "assets/fakeData.json";

const letterSlice = createSlice({
  name: "letters",
  initialState: fakeData,
  reducers: {
    addLetter: (state, action) => {
      state.push(action.payload);
    },
    deleteLetter: (state, action) => {
      return action.payload;
    },
    editedButton: (state, action) => {
      return action.payload;
    },
  },
});

export default letterSlice.reducer;
export const { addLetter, deleteLetter, editedButton } = letterSlice.actions;
