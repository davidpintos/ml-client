import { connect } from 'react-redux';
import { ItemsList } from '../components/ItemsList';

import {getItems} from '../api';

import {setCategories, setItems} from '../actions';


const mapStateToProps = ({items}, {match, location}) => {
    const {
        search,
    } = location;

    const query = search.split("=")[1];

    return {query, items};
};

const mapDispatchToProps = (dispatch) => ({
    onComponentLoad: async (query) => {
        if (query !== '') {
            const {
                data: {
                    items,
                    categories,
                },
            } = await getItems(query);

            dispatch(setItems(items));

            dispatch(setCategories(categories));
        }
    }
});



export const ItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemsList);
