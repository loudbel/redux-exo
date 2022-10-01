import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//const MOVIES_URL = 'https://www.omdbapi.com/?apikey=edf8783e&r=json&type=movie&s=batman';

const initialState = {
    loading: false,
    films: [],
    error: '',
};

export const fetchMovies = createAsyncThunk('film/fetchMovies', (s)=>{
   const q = !s || s.length == 0 ? 'bat' : s
   return axios('https://www.omdbapi.com/?apikey=edf8783e&r=json&type=movie&s='+q)
   .then(function (response) {
     return response.data
   }) 
})

const filmsSlice = createSlice({
    name: "film",
    initialState,
    reducers: {
        addFilm: (state,action)=>{
            state.films.Search.unshift(action.payload)
        }
    },
    extraReducers: (builder) => {
            builder.addCase(fetchMovies.pending, (state)=>{
                state.loading = true
            })
            builder.addCase(fetchMovies.fulfilled, (state,action)=>{
                state.loading = false
                state.films = action.payload
                state.error = ''
            })
            builder.addCase(fetchMovies.rejected, (state,action)=>{
                state.loading = false
                state.films = []
                state.error = action.error.message
                console.log('errrroooor')
            })
    }
});

export default filmsSlice.reducer;
export const { addFilm } = filmsSlice.actions