import { combineReducers } from "redux";

import auth from "./auth";
import visits from "./visits";

export const reducers = combineReducers({ auth, visits });