
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.LOADING_BOOK_SUCCESS:
        case actionTypes.LOADING_GENRES_SUCCESS:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_BOOKS_SUCCESS:
        case actionTypes.GET_BOOK_SUCCESS:
        case actionTypes.CREATE_BOOK_SUCCESS:
        case actionTypes.EDIT_BOOK_SUCCESS:
        case actionTypes.DELETE_BOOK_SUCCESS:
        case actionTypes.ERROR_OCCURED:
        case actionTypes.RESET_BOOK_STATE:
        case actionTypes.FETCH_GENRES_SUCCESS:
        case actionTypes.GET_GENRE_SUCCESS:
        case actionTypes.CREATE_GENRE_SUCCESS:
        case actionTypes.EDIT_GENRE_SUCCESS:
        case actionTypes.DELETE_GENRE_SUCCESS:
        case actionTypes.RESET_GENRE_STATE:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }

}