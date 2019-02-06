
import * as actionTypes from '../constants/actionTypes';
import '../api/bookStoreAPI';
import axios from 'axios';
import { SERVER_ERROR } from '../constants/messages';


const errorOccured = (error) => {
    return {
        type: actionTypes.ERROR_OCCURED,
        payload: error
    }
}

const fetchGenresSuccess = (data) => {
    return {
        type: actionTypes.FETCH_GENRES_SUCCESS,
        payload: data
    }
}


const createGenreSuccess = (data) => {
    return {
        type: actionTypes.CREATE_GENRE_SUCCESS,
        payload: data
    }
}


const editGenreSuccess = (data) => {
    return {
        type: actionTypes.EDIT_GENRE_SUCCESS,
        payload: data
    }
}


const deleteSuccess = (data) => {
    return {
        type: actionTypes.DELETE_GENRE_SUCCESS,
        payload: data
    }
}

const loadingSuccess = () => {
    return {
        type: actionTypes.LOADING_GENRES_SUCCESS,
    }
}


const fetchResponse = (response, fetch) => async (dispatch, getState) => {

    if (response.status === 200 && response.data.status === 'OK') {
        return dispatch(fetch(response.data.data))
    }
    dispatch(errorOccured({ status: 'ERROR', message: response.data.message }))
}


export const fetchGenres = () => async (dispatch, getState) => {

    try {

        dispatch(loadingSuccess())
        const response = await axios.get('/api/v1/genres');
        dispatch(fetchResponse(response, fetchGenresSuccess))

    }
    catch (e) {
        dispatch(errorOccured({ status: 'ERROR', message: e.message }))
    }
}



export const getGenre = (id) => async (dispatch, getState) => {

    try {
        var genre = getState().genre.items.find(x => x.id == id);

        dispatch({
            type: actionTypes.GET_GENRE_SUCCESS,
            payload: genre
        })
    }
    catch (e) {
        dispatch(errorOccured({ status: 'ERROR', message: e.message }))

    }

}



export const createGenre = (genre) => async (dispatch, getState) => {

    try {

        dispatch(loadingSuccess())

        const response = await axios.post('/api/v1/genres', {
            genre
        });

        dispatch(fetchResponse(response, createGenreSuccess))
    }
    catch (e) {
        dispatch(errorOccured({ status: 'ERROR', message: e.message }))
    }
}



export const editGenre = (genre) => async (dispatch, getState) => {

    try {

        dispatch(loadingSuccess())

        const response = await axios.put('/api/v1/genres', {
            genre
        });

        dispatch(fetchResponse(response, editGenreSuccess))

    }
    catch (e) {
        dispatch(errorOccured({ status: 'ERROR', message: e.message }))
    }
}





export const deleteGenre = (id) => async (dispatch, getState) => {

    try {

        dispatch(loadingSuccess())

        const response = await axios.delete('/api/v1/genres', { data: id });

        dispatch(fetchResponse(response, deleteSuccess))

    }
    catch (e) {
        dispatch(errorOccured({ status: 'ERROR', message: e.message }))
    }
}



