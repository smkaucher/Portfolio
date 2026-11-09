import { createSlice } from "@reduxjs/toolkit";

const readInitial = () => {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") || "dark";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: readInitial() },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
