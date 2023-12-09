import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slices/token";

const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export default store;
