import authSlice from "../modules/authSlice";
import lettersSlice from "../modules/lettersSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    authSlice,
    lettersSlice,
  },
});

export default store;
