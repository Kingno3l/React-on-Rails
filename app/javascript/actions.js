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
