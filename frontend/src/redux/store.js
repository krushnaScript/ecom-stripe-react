import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { productsApi } from "./slices/productsApi";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;