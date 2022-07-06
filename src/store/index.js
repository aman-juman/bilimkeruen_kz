import {combineReducers, createStore} from '@reduxjs/toolkit'
import {quizReducer} from "./quizReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {userReducer} from "./userReducer";

const rooterReducer = combineReducers({quiz: quizReducer, user: userReducer});
export const store = createStore(rooterReducer, composeWithDevTools());
