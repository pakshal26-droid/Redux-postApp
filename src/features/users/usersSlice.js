import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Pakshal Jain" },
  { id: 1, name: "Mehek Gupta" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
