import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface IReuestLogin {
    email: string;
    password: string;
}

export const login = createAsyncThunk<any, IReuestLogin>('auth/login', async (body, { rejectWithValue }) => { 
  try {
      const { data } = await axios.post("auth/login", body)
      return data;
  } catch (error) {
    return rejectWithValue(error)
  }
});

const initialState = {
  isFetching: false,
  error: "",
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(login.pending, (state) => {
          state.isFetching = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
          state.isFetching = false;
          state.error = "";
        });
        builder.addCase(login.rejected, (state, action) => { 
          state.isFetching = false;
          state.error = String(action.payload);
        })
    },
})

export default authSlice.reducer;