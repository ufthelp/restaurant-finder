
import React, { Component } from 'react';


import ListItem from '../list-item';
import { SortMethods } from '../../actions';
import SelectSortMethod from '../select-sort-method/container';
import { setRestaurants, filterByValue } from '../../actions';
import { connect } from 'react-redux';

const sortMethodMap = {
  [SortMethods.PRICE]: 'price',
  [SortMethods.NAME]: 'name',
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      currentRestaurants: this.props.restaurants
    };
    console.log(this.state);
  }

  sortList = (a, b) => {
    this.mappedSortMethod = sortMethodMap[this.props.sortMethod];
    return (a[this.mappedSortMethod] > b[this.mappedSortMethod]) ? 1 : -1;
  }

  filterOnSearch = event => {
    let input = event.target.value;
    this.props.filterByValue({value: input},  this.props.restaurants);
  };
  

  render() {
    const { restaurants= [] } = this.props;
    console.log('printing props',this.props);
    const length = restaurants ? restaurants.length : 0;
    return (
        <section aria-labelledby="restaurants-list">
          <h2 id="restaurants-list">{length} restaurants found</h2>
          {length > 0 ? (
                    <React.Fragment>
                        <input 
                          type="text" 
                          name="search-input"
                          aria-label="Filter by name, area, city"
                          placeholder="Filter by name, area, city"
                          onChange={(event => this.filterOnSearch(event))}
                          />
                          </React.Fragment>
                          ) : ''}
                  
            {
              length > 0 ? (<p>
              Sort restaurant by: <SelectSortMethod/>
              </p>) : ''
            
            }
            
            {restaurants.sort(this.sortList).map(item => (
              <ListItem
                  key={item.name}
                  name={item.name}/>
            ))}
        </section>
    );
  }
}

//export default List;

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    sortMethod: state.sortMethod.sortMethod
  }
};


export default connect(mapStateToProps, {setRestaurants, filterByValue})(List);

