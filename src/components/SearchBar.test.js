import React from 'react';

import { mount, shallow } from 'enzyme';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
    it('should render the component, form and input', () => {
        const props = {
            handleSubmit: jest.fn(),
            history: {},
            location: '',
        }

        const component = shallow(<SearchBar.WrappedComponent {...props}/>);

        expect(component.exists());

        expect(component.find('#form').exists()).toEqual(true);

        expect(component.find('#queryInput').exists()).toEqual(true);

        component.unmount();
    });

    it('should render the component, and check input value', () => {
        const props = {
            handleSubmit: jest.fn(),
            history: {},
            location: {
                search: 'search=mochila',
            },
        }

        const component = shallow(<SearchBar.WrappedComponent {...props}/>);

        expect(component.exists());

        expect(component.find('#queryInput').props().value).toEqual('mochila');

        component.unmount();
    });

    it('should render the component, and check input value removing url space (%20)', () => {
        const props = {
            handleSubmit: jest.fn(),
            history: {},
            location: {
                search: 'search=mochila%20gigante',
            },
        }

        const component = shallow(<SearchBar.WrappedComponent {...props}/>);

        expect(component.exists());

        expect(component.find('#queryInput').props().value).toEqual('mochila gigante');

        component.unmount();
    });

    it('should render the component, and check input value removing url space (+)', () => {
        const props = {
            handleSubmit: jest.fn(),
            history: {},
            location: {
                search: 'search=mochila+gigante+nueva',
            },
        }

        const component = shallow(<SearchBar.WrappedComponent {...props}/>);

        expect(component.exists());

        expect(component.find('#queryInput').props().value).toEqual('mochila gigante nueva');

        component.unmount();
    });
});
