import React from 'react';

import { shallow } from 'enzyme';

import {ItemDetails} from './ItemDetails';

const itemMock = {
    id: 'MLA746407607',
    title: 'Mochila Antirrobo Usb Notebook Impermeable Anticorte Litros',
    price: {
        currency: 'ARS',
        amount: 1999,
        decimals: 0,
    },
    picture: 'http://mla-s2-p.mlstatic.com/644016-MLA31021533799_062019-O.jpg',
    sold_quantity: 875,
    condition: 'new',
    free_shipping: false,
    description: 'Mochila antirrobo copada',
    categories: [
    'Ropa y Accesorios',
    'Equipaje, Bolsos y Carteras',
    'Mochilas',
    ]
};

const props = {
    currentItem: itemMock,
};

describe('ItemDetails', () => {
    it('should render the component', () => {
        const component = shallow(<ItemDetails />);

        expect(component.exists());

        component.unmount();
    });

    it('should render the component and check product description', () => {
        const component = shallow(<ItemDetails {...props} />);

        const descContainer = component.find('.description p');

        expect(descContainer.text()).toBe('Mochila antirrobo copada');

        component.unmount();
    });

    it('should render the component and check item condition', () => {
        const component = shallow(<ItemDetails {...props} />);

        const photo = component.find('img');

        expect(photo.prop('src')).toEqual('http://mla-s2-p.mlstatic.com/644016-MLA31021533799_062019-O.jpg');

        component.unmount();
    });

    it('should render the component and check New condition and quantity sold', () => {
        const component = shallow(<ItemDetails {...props} />);

        const condition = component.find('.condition');

        expect(condition.text()).toEqual('Nuevo - 875 Vendidos');

        component.unmount();
    });

    it('should render the component and check Used condition and quantity sold', () => {
        const customProps = {
            currentItem: {
                ...itemMock,
                condition: "used",
            },
        };

        const component = shallow(<ItemDetails {...customProps} />);

        const condition = component.find('.condition');

        expect(condition.text()).toEqual('Usado - 875 Vendidos');

        component.unmount();
    });

    it('should render the component and check the product title', () => {
        const component = shallow(<ItemDetails {...props} />);

        const title = component.find('.product-name');

        expect(title.text()).toEqual('Mochila Antirrobo Usb Notebook Impermeable Anticorte Litros');

        component.unmount();
    });

    it('should render the component and check the product price and decimals', () => {
        const component = shallow(<ItemDetails {...props} />);

        const itemPrice = component.find('.product-price .amount');

        expect(itemPrice.text()).toEqual('$ 1.999');

        const itemPriceDecimals = component.find('.product-price .decimals');

        expect(itemPriceDecimals.text()).toEqual('00');

        component.unmount();
    });

    it('should render the component and check some other product price and decimals', () => {
        const customProps = {
            currentItem: {
                ...itemMock,
                price: {
                    amount: 88000,
                    decimals: 44,
                }
            },
        };

        const component = shallow(<ItemDetails {...customProps} />);

        const itemPrice = component.find('.product-price .amount');

        expect(itemPrice.text()).toEqual('$ 88.000');

        const itemPriceDecimals = component.find('.product-price .decimals');

        expect(itemPriceDecimals.text()).toEqual('44');

        component.unmount();
    });

});