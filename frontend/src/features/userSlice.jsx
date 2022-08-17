import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Get user from local storage

const user = JSON.parse(localStorage.getItem("user"));

export const userLogin = createAsyncThunk("user/userLogin", async (user) => {
  try {
    // let response = await fetch("/api/users/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: {
    //     user,
    //   },
    // });

    let response = await axios.post("/api/users/login", user);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
});

export const userRegistration = createAsyncThunk(
  "user/userRegistration",
  async (user, thunkAPI) => {
    try {
      let response = await axios.post("/api/users", user);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const userLogout = createAsyncThunk("user/userLogout", async () => {
  await localStorage.removeItem("user");
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [userLogin.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.userData = null;
    },
    [userRegistration.pending]: (state) => {
      state.isLoading = true;
    },
    [userRegistration.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
    },
    [userRegistration.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.userData = null;
    },
    [userLogout.fulfilled]: (state) => {
      state.userData = null;
    },
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
