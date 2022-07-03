import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));

const budgetsSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {
    editBudget: (state, action) => {
      
      state.forEach((obj) => {
        if (obj.category === action.payload.category) {
          obj.amount = action.payload.amount;
        }
      }
      );
    },
  },
});


export const selectBudgets = (state) => state.budgets;

export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
