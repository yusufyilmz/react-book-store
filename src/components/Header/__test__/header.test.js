

import React from 'react';
import {Header} from '../index';
import { shallow } from 'enzyme'
import { Menu } from '../../Menu'
import { Logo } from '../../Logo'
import {  Row, Col } from 'react-bootstrap';


describe('HEADER COMPONENT', () => {

    let message, wrapper;

    beforeEach(() => {
        message = 'test';
        wrapper = shallow(
            <Header message={message} />
        );
    });
   
      
    test('renders element correctly', () => {
        expect(wrapper.find('ContainerWrapper').length).toBe(1);
    });

    test('renders element correctly', () => {
        expect(wrapper.find(Menu).length).toBe(1);
    });

    test('renders element correctly', () => {
        expect(wrapper.find(Logo).length).toBe(1);
    });


    test('renders text correctly', () => {
        expect(wrapper.find(Col).at(0).prop('md')).toBe(4);
    });

    test('snapshot correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})
