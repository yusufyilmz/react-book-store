import { combineReducers } from 'redux'
import book from './book-reducer';
import genre from './genre-reducer';
import error from './error-reducer';
import loader from './loader-reducer';

const rootReducer = combineReducers({
    book,
    genre,
    error,
    loader
})

export default rootReducer
