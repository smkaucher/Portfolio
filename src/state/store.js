import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./menuSlice";
import { themeReducer } from "./themeSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
  },
});
