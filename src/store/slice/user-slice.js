import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("expensemate-user")) || null,
  allUsers: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setAllUsers(state, action) {
      state.allUsers = action.payload;
    },
  },
});

export const { setUser, setLoading, setAllUsers } = userSlice.actions;
export default userSlice.reducer;
