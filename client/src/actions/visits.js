import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

import * as api from "../api/index";

export const getVisits = () => async (dispatch) => {
    try {
        const { data } = await api.fetchVisits();
        dispatch({ type: FETCH_ALL, payload: data });

    } catch (error) {

        console.log(error.message);
    }
}

export const createVisits = (visit) => async (dispatch) => {
    try {
        const { data } = await api.createVisit(visit)
        dispatch({ type: CREATE, payload: data })

    } catch (error) {

        console.log(error.message)
    }
}

export const updateVisits = (visit) => async (dispatch) => {
    try {
        const { data } = await api.updateVisit(visit)
        dispatch({ type: UPDATE, payload: data })

    } catch (error) {

        console.log(error.message)
    }
}

export const deleteVisits = (visit) => async (dispatch) => {
    try {
        const { data } = await api.deleteVisit(visit)
        dispatch({ type: DELETE, payload: data })

    } catch (error) {

        console.log(error.message)
    }
}