
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    items: [],
    item: null,
    createSuccess: false,
    editSuccess: false,
    deleteSuccess: false,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                items: action.payload.books,
                createSuccess: false,
                editSuccess: false,
                deleteSuccess: false,
                loading: false
            }
        case actionTypes.GET_BOOK_SUCCESS:
            return {
                ...state,
                item: action.payload,
                loading: false
            }

        case actionTypes.CREATE_BOOK_SUCCESS:
            return {
                ...state,
                createSuccess: true,
                loading: false,
                items: action.payload.books,
            }
        case actionTypes.EDIT_BOOK_SUCCESS:
            return {
                ...state,
                editSuccess: true,
                loading: false,
                items: action.payload.books,
            }
        case actionTypes.DELETE_BOOK_SUCCESS:
            return {
                ...state,
                deleteSuccess: true,
                loading: false,
                items: action.payload.books,
            }
        case actionTypes.LOADING_BOOK_SUCCESS:
            return {
                ...state,
                loading: true,

            }
        case actionTypes.ERROR_OCCURED:
            return {
                ...state,
                loading: false,

            }
        case actionTypes.RESET_BOOK_STATE:
            return {
                ...state,
                loading: false,
                createSuccess: false,
                editSuccess: false,
                deleteSuccess: false,
            }


        default:
            return state;
    }

}