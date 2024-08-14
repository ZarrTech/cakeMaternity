import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../../utils/api";





interface AuthState {
  name: string | null;
  token: string | null;
  isLoading: boolean;
  error: null | string;
  isMember: boolean;
  isOpen: boolean
}

const initialState: AuthState = {
  name: null,
  token: null,
  isLoading: false,
  error: null,
  isMember: true,
  isOpen: false
};

export const registerUser = createAsyncThunk<
  { name: string, token: string },
  { name: string; email: string; password: string },
  { rejectValue: string }
>("auth/registerUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await api.post<{name:string, token:string}>("/auth/register", userData);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.msg);
  }
});

export const loginUser = createAsyncThunk<
  { name:string; token: string },
  {  email: string; password: string;  },
  { rejectValue: string }
>("auth/loginUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await api.post<{ name:string; token: string }>(
      "/auth/login",
      userData
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.msg);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.name = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("name");

    },
    setUser: (
      state,
      action: PayloadAction<{ name: string | null, token: string | null}>
    ) => {
      state.token = action.payload.token
      state.name = action.payload.name
    },
    setIsMember: (state) => {
      state.isMember = !state.isMember;
    },
    openAuthModal: (state) => {
      state.isOpen = true;
    },
    closeAuthModal: (state) => {
      state.isOpen = false;
    },
  },

  extraReducers: (builder) => {
    builder
      // register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<{ name: string; token: string }>) => {
          state.isLoading = false;
          state.name = action.payload.name;
          state.token = action.payload.token;
           localStorage.setItem('token', action.payload.token)
           localStorage.setItem("name", action.payload.name);
        }
      )
      .addCase(
        registerUser.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload || "Registration failed";
        }
      )

      // login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{ name: string; token: string }>) => {
          state.isLoading = false;
          state.name = action.payload.name;
          state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("name", action.payload.name);
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "login failed";
      });
  },
});

export const { logout,setIsMember, openAuthModal, closeAuthModal, setUser } = authSlice.actions;
export default authSlice.reducer;
