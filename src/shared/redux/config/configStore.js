import fanLettersReducer from "../modules/fanLettersReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    fanLettersReducer,
  },
});

export default store;
