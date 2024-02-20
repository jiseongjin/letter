import fakeData from "assets/fakeData.json";

const LETER_PLUS = "PLUS";
const EDIT = "EDIT";
const DELETE = "DELETE";

export const letterPlus = (newLetter) => {
  return {
    type: LETER_PLUS,
    payload: newLetter,
  };
};

export const editedButton = (addFanLetter) => {
  return {
    type: EDIT,
    payload: addFanLetter,
  };
};

export const deleteLetter = (updatFanletters) => {
  return {
    type: DELETE,
    payload: updatFanletters,
  };
};

const fanLettersReducer = (state = fakeData, action) => {
  switch (action.type) {
    case LETER_PLUS:
      return [...state, action.payload];
    case EDIT:
      return action.payload;
    case DELETE:
      return action.payload;
    default:
      return state;
  }
};

export default fanLettersReducer;
