import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "../features/userDetails/userDetailsSlice";
 
 
export const store = configureStore({
    reducer: {
        userDetails: userDetailsSlice.reducer,
    },
})