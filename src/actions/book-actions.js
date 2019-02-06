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

const fetchBooksSuccess = (data) => {
    return {
        type: actionTypes.FETCH_BOOKS_SUCCESS,
        payload: data
    }
}

const createBookSuccess = (data) => {
    return {
        type: actionTypes.CREATE_BOOK_SUCCESS,
        payload: data
    }
}


const editBookSuccess = (data) => {
    return {
        type: actionTypes.EDIT_BOOK_SUCCESS,
        payload: data
    }
}


const deleteSuccess = (data) => {
    return {
        type: actionTypes.DELETE_BOOK_SUCCESS,
        payload: data
    }
}

const loadingSuccess = () => {
    return {
        type: actionTypes.LOADING_BOOK_SUCCESS,
    }
}


const fetchResponse = (response, fetch) => async (dispatch, getState) => {

    if (response.status === 200 && response.data.status === 'OK') {
        return dispatch(fetch(response.data.data))
    }

    dispatch(errorOccured({ status: 'ERROR', message: SERVER_ERROR }))
}

export const fetchBooks = () => async (dispatch, getState) => {

    try {

        dispatch(loadingSuccess())

        const response = await axios.get('/api/v1/books');
       
        dispatch(fetchResponse(response, fetchBooksSuccess))

    }
    catch (e) {
        dispatch(errorOccured({ status: 'ERROR', message: e.message }))
    }
}



export const getBook = (id) => async (dispatch, getState) => {

    try {
        var book = getState().book.items.find(x => x.id == id);
        return dispatch({
            type: actionTypes.GET_BOOK_SUCCESS,
            payload: book
        })
    }
    catch (e) {
        dispatch(errorOccured({ status: 'ERROR', message: e.message }))
    }
}


export const createBook = (book) => async (dispatch, getState) => {

    try {


        dispatch(loadingSuccess())

        const response = await axios.post('/api/v1/books', {
            book
        });

        dispatch(fetchResponse(response, createBookSuccess))

    }
    catch (e) {
        dispatch(errorOccured({ status: 'ERROR', message: e.message }))
    }
}



export const editBook = (book) => async (dispatch, getState) => {

    try {

        dispatch(loadingSuccess())

        const response = await axios.put('/api/v1/books', {
            book
        });

        dispatch(fetchResponse(response, editBookSuccess))

    }
    catch (e) {
        dispatch(errorOccured({ status: 'ERROR', message: e.message }))
    }
}



export const deleteBook = (id) => async (dispatch, getState) => {

    try {

        dispatch(loadingSuccess())

        const response = await axios.delete('/api/v1/books', { data: id });

        dispatch(fetchResponse(response, deleteSuccess))

    }
    catch (e) {
        dispatch(errorOccured({ status: 'ERROR', message: e.message }))
    }
}

