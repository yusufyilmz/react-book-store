
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    items: [],
    item: null,
    createSuccess: false,
    editSuccess: false,
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_GENRES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.genres,
                createSuccess: false,
                editSuccess: false,
                deleteSuccess: false,
            }
        case actionTypes.GET_GENRE_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.payload
            }
        case actionTypes.CREATE_GENRE_SUCCESS:
            return {
                ...state,
                loading: false,
                createSuccess: true,
                items: action.payload.genres,
            }
        case actionTypes.EDIT_GENRE_SUCCESS:
            return {
                ...state,
                loading: false,
                editSuccess: true,
                items: action.payload.genres,
            }
        case actionTypes.DELETE_GENRE_SUCCESS:
            return {
                ...state,
                deleteSuccess: true,
                loading: false
            }
        case actionTypes.LOADING_GENRES_SUCCESS:
            return {
                ...state,
                loading: true
            }
        case actionTypes.ERROR_OCCURED:
            return {
                ...state,
                loading: false,
            }

        case actionTypes.RESET_GENRE_STATE:
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