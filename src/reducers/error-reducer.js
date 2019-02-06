
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    error: false,
    errorMessage: ''
}

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.ERROR_OCCURED:
            return {
                ...state,
                error: true,
                errorMessage: action.payload.message,
            }
        case actionTypes.RESET_ERROR:
            return {
                ...state,
                error: false,
                errorMessage: ''
            }
        default:
            return state;
    }

}