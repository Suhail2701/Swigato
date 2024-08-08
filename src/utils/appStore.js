import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; 
import userReducer from "./userSlice";
import darkModeReducer from "./darkModeSlice";


const appStore = configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
        darkMode: darkModeReducer,
    }
});

export default appStore;