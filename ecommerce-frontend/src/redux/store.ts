import { configureStore } from "@reduxjs/toolkit";
import { productAPI } from "./api/productAPI";
import { userAPI } from "./api/userAPI";
import { userReducer } from "./reducer/userReducer";


export const server=import.meta.env.VITE_SERVER;

export const store=configureStore({
    reducer:{
         [userAPI.reducerPath]: userAPI.reducer,
          [productAPI.reducerPath]: productAPI.reducer,
          [userReducer.name]: userReducer.reducer,
    },
   middleware: (mid) => [
    ...mid(),
    userAPI.middleware,
    productAPI.middleware],
});


export type RootState = ReturnType<typeof store.getState>;