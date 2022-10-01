import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filmtoadd : {}
}

const addSlice = createSlice({
    name: 'filmtoadd',
    initialState,
    reducers: {
        addFilm: (state,action)=>{
            state.filmtoadd = action.payload
        }
    }
})

export default addSlice.reducer
export const { addFilm } = addSlice.actions