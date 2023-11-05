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
    },
    tokenInfo: (state, action) => {
      state.token = action.payload;
    },
    loginModeToggle: (state) => {
      state.loginMode = !state.loginMode;
    },
    setSlug: (state, action) => {
      state.slug = action.payload;
    },
  },
});

export const { authInfo, tokenInfo, loginModeToggle, setSlug } =
  authSlice.actions;

export default authSlice.reducer;
