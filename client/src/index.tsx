import React from "react";
import ReactDOM from "react-dom/client";

import App from './App';

import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import { reducers } from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<Provider store={store}><App/></Provider>);