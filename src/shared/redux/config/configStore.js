import fanLettersReducer from "../modules/fanLettersReducer";
import authSlice from "../modules/authSlice";
import lettersSlice from "../modules/lettersSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    fanLettersReducer,
    authSlice,
    lettersSlice,
  },
});

export default store;
