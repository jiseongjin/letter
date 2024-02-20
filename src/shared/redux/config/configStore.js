import fanLettersReducer from "../modules/fanLettersReducer";
import authSlice from "../modules/authSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    fanLettersReducer,
    authSlice,
  },
});

export default store;
