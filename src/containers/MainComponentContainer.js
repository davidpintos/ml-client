import { connect } from 'react-redux';
import { MainComponent } from '../components/MainComponent';

const mapStateToProps = state => {
  return {};
};

export const MainComponentContainer = connect(mapStateToProps)(MainComponent);
