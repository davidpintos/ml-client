import * as actions from './index';

describe('actions', () => {
    it('checks setItem action', () => {
        const result = actions.setItem({id: 'MLA1', title: 'Mochila'});

        expect(result).toEqual({
            type: actions.SET_ITEM,
            payload: {id: 'MLA1', title: 'Mochila'},
        });
    });

    it('checks setItems action', () => {
        const result = actions.setItems([{id: 'MLA1', title: 'Mochila'},
                                        {id: 'MLA2', title: 'Iphone'},]);

        expect(result).toEqual({
            type: actions.SET_ITEMS,
            payload: [
                {id: 'MLA1', title: 'Mochila'},
                {id: 'MLA2', title: 'Iphone'},
            ],
        });
    });

    it('checks setCategories action', () => {
        const result = actions.setCategories(['Viajes', 'Tours']);

        expect(result).toEqual({
            type: actions.SET_CATEGORIES,
            payload: ['Viajes', 'Tours'],
        });
    });
});
