

import React from 'react';
import { BookList } from '../BookList';
import { shallow, mount } from 'enzyme'
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import { Header } from '../../Header';
import { Spinner } from '../../Spinner';
import { Content } from '../../Content';
import { Error } from '../../Error';
import { LinkButton } from '../../Elements/linkButton';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookCard } from '../BookCard';
import bookContainer from '../../../containers/bookContainer';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]

describe('APP COMPONENT', () => {

    const mockStore = configureMockStore(middlewares);
    const book  ={
        items: [{
            name: 'book 1',
            genre: {
                name: 'comedy'
            },
            price: 1,
            id: 1
        }]
    }
    const store = mockStore({
        book,
        loader: {
            loading: false,

        },
        genre: {
            items: []
        },
        error: {
            error: false,
        }
    });

    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <Router>
                    <BookList />
                </Router>
            </Provider>
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find(LinkButton).length).toBe(1 + book.items.length * 2)
    });


    test('renders element correctly', () => {
        expect(wrapper.find(BookCard).length).toBe(book.items.length)
    });


    test('renders props correctly', () => {
        expect(wrapper.find(LinkButton).at(0).prop('path')).toContain('create')
    });



    test('renders props correctly', () => {
        expect(wrapper.find(BookCard).at(0).prop('item')).toBe(book.items[0])
    });

    
    test('renders props correctly', () => {
        expect(wrapper.find(bookContainer).prop('operation')).toBe('list')
    });

    test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
