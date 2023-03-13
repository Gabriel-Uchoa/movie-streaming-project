import { createStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import moviesReducer from "./movies/reducers";
import userReducer from "./user/reducer";

const reducers = combineReducers({
    movies: moviesReducer,
    user_info: userReducer
})

const store = createStore(reducers)

export default store