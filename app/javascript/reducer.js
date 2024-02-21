import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  randomMessage: "",
};

const randomMessageSlice = createSlice({
  name: "randomMessage",
  initialState,
  reducers: {
    setRandomMessage: (state, action) => {
      state.randomMessage = action.payload;
    },
  },
});

export const { setRandomMessage } = randomMessageSlice.actions;

export default randomMessageSlice.reducer;
