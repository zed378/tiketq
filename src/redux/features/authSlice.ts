import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authStore, user, role } from "../../type/redux/auth";

const initialState: authStore = {
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    role: role.AUTHENTICATED,
    picture: "",
    verified: false,
  },
  token: window.localStorage.getItem("token") || "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ data: user; token: string }>) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      window.localStorage.setItem("token", action.payload.token);
    },

    setUpdateDataUser: (state, action: PayloadAction<user>) => {
      state.user = action.payload;
    },

    setUpdateUser: (
      state,
      action: PayloadAction<{ data: user; token: string }>
    ) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      window.localStorage.removeItem("token");
      window.localStorage.setItem("token", action.payload.token);
    },

    removeUser: (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
      window.localStorage.removeItem("token");
    },
  },
});

export const { setUser, setUpdateUser, removeUser, setUpdateDataUser } =
  authSlice.actions;

export default authSlice.reducer;
