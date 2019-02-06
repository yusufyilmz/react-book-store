import * as actionTypes from '../../constants/actionTypes';
import * as actions from '..';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import moxios from 'moxios';
import * as messages from '../../constants/messages';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

describe('ACTIONS', () => {

    let store, item;


    beforeEach(function () {
        store = mockStore({})
        item = {}
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });


    test('BOOK FETCH ACTION SUCCESS', () => {

        var response = {
            status: 'OK',
            data: [
                {
                    id: 1,
                    genreId: 2,
                    name: 'test',
                    price: 5
                }
            ]
        };

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response
            });
        });

        const expectedActions = [
            {
                type: actionTypes.LOADING_BOOK_SUCCESS,
            },
            {
                type: actionTypes.FETCH_BOOKS_SUCCESS, payload: response.data
            },
        ];

        return store.dispatch(actions.fetchBooks()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })

    test('BOOK FETCH ACTION 400 ERROR', () => {

        var response = { "message": "Request failed with status code 400", "status": "ERROR" };
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 400
            });
        });

        const expectedActions = [
            {
                type: actionTypes.LOADING_BOOK_SUCCESS,
            },
            {
                type: actionTypes.ERROR_OCCURED, payload: response
            },
        ];

        return store.dispatch(actions.fetchBooks()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    })

    test('BOOK FETCH ACTION API ERROR', () => {

        var response = {
            status: 'ERROR',
            message: messages.SERVER_ERROR
        };

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response
            });
        });

        const expectedActions = [
            {
                type: actionTypes.LOADING_BOOK_SUCCESS,
            },
            {
                type: actionTypes.ERROR_OCCURED, payload: response
            },
        ];

        return store.dispatch(actions.fetchBooks()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
})