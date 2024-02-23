import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
  data: [],
  status: "idle",
  error: null
};

// Define an async thunk for fetching data
export const fetchDummyData = createAsyncThunk(
  "dummy/fetchDummyData",
  async () => {
    const response = await axios.get("/api/dummy");
    return response.data;
  }
);

// Create a slice
const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDummyData.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchDummyData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDummyData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export default dummySlice.reducer;
