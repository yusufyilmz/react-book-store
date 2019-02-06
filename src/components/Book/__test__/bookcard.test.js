

import React from 'react';
import { BookCard } from '../BookCard';
import { shallow, mount } from 'enzyme'
import { LinkButton } from '../../Elements/linkButton';

describe('BOOKCARD COMPONENT', () => {

  
    var wrapper, props;

    beforeEach(() => {
        props = {
            item: {
                name: 'book 1',
                genre: {
                    name: 'comedy'
                },
                price: 1,
                id: 1
            }
        };
        wrapper = shallow(
            <BookCard {...props}/>
        );
    });


    test('renders element correctly', () => {
        expect(wrapper.find('CardWrapper').length).toBe(1)
    });
    
    test('renders text correctly', () => {
        expect(wrapper.find('BookParagraphWrapper').at(0).text()).toBe(props.item.genre.name)
    });
    
    test('renders props correctly', () => {
        expect(wrapper.find(LinkButton).at(0).prop('path')).toContain(props.item.id)
    });
  
    test('snapchat correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
