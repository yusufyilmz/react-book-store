import bookReducer from '../../reducers/book-reducer';
import * as actionTypes from '../../constants/actionTypes';

describe('REDUCERS', () => {

    let initialState;

    beforeEach(() => {
        initialState = {
            items: [],
            item: null,
            createSuccess: false,
            editSuccess: false,
            deleteSuccess: false,
            loading: false
        }

    });

    describe('INITIAL STATE', () => {
        test('is correct', () => {
            const action = { type: 'dummy_action' };
            expect(bookReducer(undefined, action)).toEqual(initialState);
        });
    });


    describe('FETCH BOOKS SUCCESS', () => {
        test('returns correct state', () => {
            var payload = { books: [{ book: 'test' }] }
            const action = { type: actionTypes.FETCH_BOOKS_SUCCESS, payload };
            expect(bookReducer(undefined, action)).toEqual({ ...initialState, items: payload.books });

        });
    });


    describe('CREATE BOOK SUCCESS', () => {
        test('returns correct state', () => {
            var payload = { books: [{ book: 'test' }] }
            const action = { type: actionTypes.CREATE_BOOK_SUCCESS, payload };
            expect(bookReducer(undefined, action)).toEqual({ ...initialState, items: payload.books, createSuccess: true });

        });
    });


})