import * as actionTypes from '../constants/actionTypes';


export const resetError = () => async (dispatch, getState) => {    
    
   dispatch({
        type: actionTypes.RESET_ERROR,
    })
}
