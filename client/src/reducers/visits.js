import { FETCH_ALL, CREATE } from "../constants/actionTypes";

const visitReducer = (visits = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...visits, action.payload];

        default:
            return visits;
    }
}

export default visitReducer;