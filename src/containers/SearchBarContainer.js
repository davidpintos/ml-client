import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';

const mapStateToProps =  state => {
  return {};
};

export const SearchBarContainer = connect(mapStateToProps)(SearchBar);
