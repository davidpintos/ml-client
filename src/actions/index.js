export const SET_ITEM = 'SET_ITEM';
export const SET_ITEMS = 'SET_ITEMS';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export const setItem = (item) => ({
    type: SET_ITEM,
    payload: item,
});

export const setItems = (items) => ({
    type: SET_ITEMS,
    payload: items,
});

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
});
