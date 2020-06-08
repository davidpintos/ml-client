import { connect } from 'react-redux';
import { ItemDetails } from '../components/ItemDetails';

const mapStateToProps = ({item= {}}) => ({item});

export const ItemDetailsContainer = connect(mapStateToProps)(ItemDetails);
