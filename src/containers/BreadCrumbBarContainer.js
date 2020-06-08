import { connect } from 'react-redux';
import { BreadCrumbBar } from '../components/BreadCrumbBar';

const mapStateToProps = ({categories= []}) => {
  return {
    categories,
  };
};


export const BreadCrumbBarContainer = connect(mapStateToProps)(BreadCrumbBar);
