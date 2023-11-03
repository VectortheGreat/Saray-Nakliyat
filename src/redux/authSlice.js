import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: "",
  token: "",
  loginMode: false,
  slug: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authInfo: (state, action) => {
      state.auth = action.payload;
      //console.log("Auth: ", state.auth);
    },
    tokenInfo: (state, action) => {
      state.token = action.payload;
      //console.log("Token: ", state.token);
    },
    loginModeToggle: (state) => {
      state.loginMode = !state.loginMode;
      //console.log("Login Mode: ", state.loginMode);
    },
    setSlug: (state, action) => {
      state.slug = action.payload;
      console.log(state.slug);
      console.log(action.payload);
    },
  },
});

export const { authInfo, tokenInfo, loginModeToggle, setSlug } =
  authSlice.actions;

export default authSlice.reducer;
