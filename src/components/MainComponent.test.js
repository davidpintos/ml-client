import React from 'react';

import { shallow } from 'enzyme';

import { MainComponent } from './MainComponent';

describe('MainComponent', () => {
    it('should render the component', () => {
        const component = shallow(<MainComponent />);

        expect(component.exists());

        component.unmount();
    });

    it('should render the component, and searchbar exists', () => {
        const component = shallow(<MainComponent />);

        expect(component.exists());

        expect(component.find('.searchBar').exists()).toEqual(true);

        component.unmount();
    });
});
