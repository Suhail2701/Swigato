import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name:"darkMode",
    initialState: false,
    reducers:{

        toggleMode:(state)=>{
            return !state;
        }
    }

})

export const {toggleMode} = darkModeSlice.actions;

export default darkModeSlice.reducer;