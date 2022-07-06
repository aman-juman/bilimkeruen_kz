import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss';
import App from './App';
import {auth, db, storage} from "./firebase/config";
import {Provider} from "react-redux";
import {store} from "./store";


export const Context = createContext(null);

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={{auth, db, storage}}>
            <Provider store={store}>
                <App/>
            </Provider>
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
