import React from 'react';

import { shallow } from 'enzyme';

import {BreadCrumbBar} from './BreadCrumbBar';

describe('BreadCrumbBar', () => {
    it('should render the component', () => {
        const component = shallow(<BreadCrumbBar />);

        expect(component.exists());

        component.unmount();
    });

    it('should render the component and categories', () => {
        const props = {
            categories: ['Juguetes', 'Aviones'],
        };
        const component = shallow(<BreadCrumbBar {...props}/>);

        expect(component.exists());

        const categoriesComp = component.find('.categories nav span');

        expect(categoriesComp.length).toBe(2);

        component.unmount();
    });

    it('should render the component and no categories found', () => {
        const props = {};
        const component = shallow(<BreadCrumbBar {...props}/>);

        expect(component.exists());

        const categoriesComp = component.find('.categories nav span');

        expect(categoriesComp.length).toBe(0);

        component.unmount();
    });

});