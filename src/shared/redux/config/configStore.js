import { createStore, combineReducers } from "redux";
import fanLettersReducer from "../modules/fanLettersReducer";

const rootReducer = combineReducers({
  fanLettersReducer,
});
const store = createStore(rootReducer);

export default store;
