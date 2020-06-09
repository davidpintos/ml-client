import { connect } from 'react-redux';
import { ItemDetails } from '../components/ItemDetails';

import {getItem} from '../api';

import {setItem, setCategories} from '../actions';

const mapStateToProps = ({currentItem = {}}) => ({currentItem});

const mapDispatchToProps = (dispatch) => ({
    onComponentLoad: async (id) => {
        if (id !== '') {
            const { data } = await getItem(id);

            dispatch(setItem(data));

            dispatch(setCategories(data.categories));
        }
    }
});

export const ItemDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
