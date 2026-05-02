import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "error");
    }
  },
  {
    condition: (_, { getState }) => {
      const { users } = getState();

      if (users.isLoading) {
        return false;
      }

      return true;
    },
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    Loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(axiosUsers.pending, (state) => {
      state.Loading = true;
      state.error = null;
    });

    builder.addCase(axiosUsers.fulfilled, (state, action) => {
      state.Loading = false;
      state.data = action.payload;
    });

    builder.addCase(axiosUsers.rejected, (state, action) => {
      state.Loading = false;
      state.error = action.payload;
    });
  },
});


export default usersSlice.reducer;