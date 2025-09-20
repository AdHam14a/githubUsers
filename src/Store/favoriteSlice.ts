interface IUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type User = { id: number; login: string; avatar_url: string; html_url: string };
type FavoritesState = { favorites: User[] };
const raw = JSON.parse(localStorage.getItem("favorites") || "[]");
const cleaned: User[] = raw.filter(
  (u:IUser) =>
    u &&
    typeof u.id === "number" &&
    typeof u.login === "string" &&
    typeof u.avatar_url === "string" &&
    typeof u.html_url === "string"
);
const initialState: FavoritesState = { favorites: cleaned };
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<User>) => {
      const exists = state.favorites.some((u) => u.id === action.payload.id);
      if (exists) {
        state.favorites = state.favorites.filter(
          (u) => u.id !== action.payload.id
        );
      } else {
        state.favorites.push(action.payload);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    clearFavorites: (state) => {
      state.favorites = [];
      localStorage.setItem("favorites", JSON.stringify([]));
    },
  },
});
export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
