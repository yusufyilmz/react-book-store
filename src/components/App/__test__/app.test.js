

import React from 'react';
import { App } from '../index';
import { shallow, mount } from 'enzyme'
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import ReduxThunkMiddleware from 'redux-thunk';
import ReduxPromiseMiddleware from 'redux-promise';
import { Header } from '../../Header';
import { Spinner } from '../../Spinner';
import { Content } from '../../Content';
import { Error } from '../../Error';

let middlewares = [ReduxThunkMiddleware, ReduxPromiseMiddleware]

describe('APP COMPONENT', () => {

    const mockStore = configureMockStore(middlewares);
    const store = mockStore({
        book: {
            items:[]
        },
        genre: {
            items:[]
        },
        loader: {
            
        },
        error: {
            
        }
    });

    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    test('renders element correctly', () => {
        expect(wrapper.find(Header).length).toBe(1)
    });

    test('renders element correctly', () => {
        expect(wrapper.find(Spinner).length).toBe(1)
    });


    // test('renders element correctly', () => {
    //     expect(wrapper.find(MealPage).length).toBe(1)
    // });

    // test('renders element correctly', () => {
    //     expect(wrapper.find(ResultPage).length).toBe(1)
    // });

    // test('renders element correctly', () => {
    //     expect(wrapper.find(ErrorPage).length).toBe(1)
    // });

    // test('snapchat correctly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });

})
