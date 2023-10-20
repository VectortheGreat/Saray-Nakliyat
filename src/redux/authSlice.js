import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: "",
  token: "",
  loginMode: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authInfo: (state, action) => {
      state.auth = action.payload;
      console.log("Auth: ", state.auth);
    },
    tokenInfo: (state, action) => {
      state.token = action.payload;
      console.log("Token: ", state.token);
    },
    loginModeToggle: (state) => {
      state.loginMode = !state.loginMode;
      console.log("Login Mode: ", state.loginMode);
    },
  },
});

export const { authInfo, tokenInfo, loginModeToggle } = authSlice.actions;

export default authSlice.reducer;
