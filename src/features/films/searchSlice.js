import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keywords: '',
    filtredFilms : [],
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        filter: (state,action)=>{
            state.keywords = action.payload
        }
    }
})

export default searchSlice.reducer
export const { filter } = searchSlice.actions