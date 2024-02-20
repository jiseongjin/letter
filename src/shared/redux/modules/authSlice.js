import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    liginData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default authSlice.reducer;
export const { liginData } = authSlice.actions;
