// ActioN Types
export const INCREMENT_COUNTER = "INC";
export const ADD_COUNTER = "ADD";
export const DECREMENT_COUNTER = "DEC";
export const SUBTRACT_COUNTER = "SUB";

const initialState = {
  counter: 0,
};

// Reducer

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };
    case "DEC":
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };
    case "SUB":
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };
    default:
      return state;
  }
};

export default counterReducer;
