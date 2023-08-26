import { configureStore } from "@reduxjs/toolkit";
import { chatApi } from "./slices/apiSlice";
import userReducer from "./slices/userSlice";
// ...
export const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(chatApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
