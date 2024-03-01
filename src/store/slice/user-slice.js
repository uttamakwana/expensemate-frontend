import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: JSON.parse(localStorage.getItem("expensemate-client")) || null,
  allUsers: null,
  loading: false,
};

export const clientSlice = createSlice({
  name: "Client",
  initialState,
  reducers: {
    setClient(state, action) {
      state.client = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setAllUsers(state, action) {
      state.allUsers = action.payload;
    },
  },
});

export const { setClient, setLoading, setAllUsers } = clientSlice.actions;
export default clientSlice.reducer;
