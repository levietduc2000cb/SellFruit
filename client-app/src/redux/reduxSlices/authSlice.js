import axiosInstance from "~/axios/axiosConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveToken, removeToken } from "~/util/handleToken";
import { saveInforUser, removeUser } from "~/util/handleInforUser";
import { removeCart } from "~/util/handleCartItem";

const initialState = {
  loading: false,
  error: false,
  message: "",
  userInfo: {},
  userLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = { ...action.payload };
      state.userLogin = true;
    },
    resetMessage: (state, action) => {
      state.message = "";
    },
    editProfile: (state, action) => {
      state.userInfo = { ...action.payload };
      saveInforUser(action.payload);
    },
    logOut: (state, action) => {
      removeUser();
      removeToken();
      removeCart();
      state.userInfo = {};
      state.userLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registser.pending, (state, action) => {
      state.loading = true;
      state.error = false;
      state.userLogin = false;
      state.message = "";
    });
    builder.addCase(registser.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.message) {
        state.message = action.payload.message;
      } else {
        state.userInfo = { ...action.payload.user };
        state.userLogin = true;
        saveToken(action.payload.token);
        saveInforUser(action.payload.user);
      }
    });
    builder.addCase(registser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload.message;
    });
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      state.error = false;
      state.userLogin = false;
      state.message = "";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.message) {
        state.message = action.payload.message;
      } else {
        state.userInfo = { ...action.payload.user };
        state.userLogin = true;
        saveToken(action.payload.token);
        saveInforUser(action.payload.user);
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload.message;
    });
  },
});

export const registser = createAsyncThunk("auth/register", async (data) => {
  const response = await axiosInstance.post("user/register", data);
  return response.data;
});

export const login = createAsyncThunk("auth/login", async (data) => {
  const response = await axiosInstance.post("user/login", data);
  return response.data;
});

export const { setUser, resetMessage, editProfile, logOut } = authSlice.actions;

export default authSlice.reducer;
