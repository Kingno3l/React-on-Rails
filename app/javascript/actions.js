import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomMessage = createAsyncThunk(
  "randomMessage/fetchRandomMessage",
  async () => {
    const response = await fetch("/api/v1/random/message");
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    return data.message;
  }
);

const randomMessageSlice = createSlice({
  name: "randomMessage",
  initialState: {
    message: "",
    status: "idle",
    error: null,
  },
  reducers: {
    setRandomMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
      })
      .addCase(fetchRandomMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setRandomMessage } = randomMessageSlice.actions;

export default randomMessageSlice.reducer;
