import { connect } from 'react-redux';
import List from './index';

import { setRestaurants, filterByValue } from '../../actions';


const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    sortMethod: state.sortMethod.sortMethod
  }
};

const mapDispatchToProps = {
  setRestaurants,
  filterByValue
}
//{setRestaurants, filterByValue}
export default connect(mapStateToProps, mapDispatchToProps)(List);
