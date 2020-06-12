import React from 'react';

import { shallow } from 'enzyme';

import {ItemsList} from './ItemsList';

const itemsMock = [{
    id: 'MLA1',
    title: 'Mochila Antirrobo',
    price: {
        currency: 'ARS',
        amount: 1999,
        decimals: 0,
    },
    picture: 'http://mla-s2-p.mlstatic.com/mochila.jpg',
    free_shipping: false,
    state: 'Mendoza',
},
{
    id: 'MLA2',
    title: 'Iphone',
    price: {
        currency: 'ARS',
        amount: 23456,
        decimals: 0,
    },
    picture: 'http://mla-s2-p.mlstatic.com/iphone.jpg',
    free_shipping: false,
    state: 'Capital Federal',
}];


const props = {
    items: itemsMock,
};

describe('ItemsList', () => {
    it('should render the component', () => {
        const component = shallow(<ItemsList />);

        expect(component.exists());

        component.unmount();
    });

    it('checks that the items are present', () => {
        const component = shallow(<ItemsList {...props} />);

        const items = component.find('.item');

        expect(items.length).toBe(2);

        component.unmount();
    });

    it('verifies the values of the first item are shown properly', () => {
        const component = shallow(<ItemsList {...props} />);

        // Using First Item Id
        const photo = component.find('#MLA1 img');

        expect(photo.prop('src')).toEqual('http://mla-s2-p.mlstatic.com/mochila.jpg');

        const price = component.find('#MLA1 .price');

        expect(price.text()).toEqual('$ 1.999');

        const freeShippingItem = component.find('#MLA1 .freeShipping');

        expect(freeShippingItem.exists());

        const title = component.find('#MLA1 .title');

        expect(title.text()).toEqual('Mochila Antirrobo');

        const state = component.find('#MLA1 .state');

        expect(state.text()).toEqual('Mendoza');

        component.unmount();
    });

    it('verifies the values of the second item are shown properly', () => {
        const component = shallow(<ItemsList {...props} />);

        // Using Second Item Id
        const photo = component.find('#MLA2 img');

        expect(photo.prop('src')).toEqual('http://mla-s2-p.mlstatic.com/iphone.jpg');

        const price = component.find('#MLA2 .price');

        expect(price.text()).toEqual('$ 23.456');

        const freeShippingItem = component.find('#MLA2 .freeShipping');

        expect(freeShippingItem.exists()).toBeFalsy();

        const title = component.find('#MLA2 .title');

        expect(title.text()).toEqual('Iphone');

        const state = component.find('#MLA2 .state');

        expect(state.text()).toEqual('Capital Federal');

        component.unmount();
    });
});
