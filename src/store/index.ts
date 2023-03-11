import { createStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import moviesReducer from "./movies/reducers";

const reducers = combineReducers({
    movies: moviesReducer,
})

const store = createStore(reducers)

export default store