import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

import  counterSliceReducer  from "./counter";
import authSliceReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterSliceReducer, auth: authSliceReducer },
});



export default store;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment")
//     return { counter: state.counter + 1, show: state.show };
//   if (action.type === "decrement")
//     return { counter: state.counter - 1, show: state.show };
//   if (action.type === "increase")
//     return { counter: state.counter + action.amount, show: state.show };
//   if (action.type === "toggle")
//     return { counter: state.counter, show: !state.show };
//   return state;
// };

// const store = createStore(counterReducer);
