// import { combineReducer } from "./rootReducer";

import { combineReducer } from "./rootReducer";

const { configureStore } = require("@reduxjs/toolkit");

export const store = () =>
  configureStore({
    reducer: combineReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== "production",
  });
