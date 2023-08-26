import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface User {
  id: string;
  username: string;
  avatar: string;
}

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state: any, action: any) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export default userSlice.reducer;
