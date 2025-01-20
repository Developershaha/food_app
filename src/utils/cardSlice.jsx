import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // this is our reduce function and have access of the state means initial value
      if (!state?.items?.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items?.pop();
    },
    clearCard: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCard } = cardSlice.actions;
export default cardSlice.reducer;
