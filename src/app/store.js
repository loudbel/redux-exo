import {configureStore} from "@reduxjs/toolkit"
import filmsReducer from "../features/films/filmsSlice"
import searchReducer from "../features/films/searchSlice"

const store = configureStore({
    reducer: {
        film: filmsReducer,
        search: searchReducer
    }
})
 export default store;