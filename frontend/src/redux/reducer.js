import { combineReducers } from 'redux';
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";
import { productsApi } from "./slices/productsApi";

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
})