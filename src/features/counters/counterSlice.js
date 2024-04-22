import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
  ];

const countersSlice = createSlice({
    name: "counters",
    initialState,
    reducers:{
        increment: (state, action) => {
            const counterIndex = state.findIndex(c => c.id === action.payload);
            if (state[counterIndex].value >= 0) {
                state[counterIndex].value++;
            }
        },
        decrement: (state, action) => {
            const counterIndex = state.findIndex(c => c.id === action.payload);
            if (state[counterIndex].value > 0) {
                state[counterIndex].value--;
            }
            else {
                alert("Counter value is already zero!");
            }
        },
    }

});

export default countersSlice.reducer;
export const { increment, decrement}=countersSlice.actions;