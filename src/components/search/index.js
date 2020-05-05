
import React, { Component } from 'react';
import Input from '../input';
import Button from '../button';


import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            city: 'san francisco',
            dinner: ''
        };
    }

    search() {
        const { city } = this.state;
        this.props.fetchRestaurants(city);
    }

    render() {
        return (
            <form id="search" role="search">
                <label htmlFor="search-input-city">{name}</label>
                <input 
                    id="search-input-city"
                    type="search"
                    aria-label="Search"
                    placeholder="Enter City to search restaurants..."
                    onChange={(event => this.setState({city: event.target.value}))}
                    />
                {/* { <Input />} */}
                <button 
                    type="button"
                    onClick={() => this.search()}>
                    Click Me!
                </button>
            </form>
        );
    }
}

// provide the currently selected property to the element
const mapStateToProps = state => ({ city: state.city });  

export default connect(mapStateToProps,{ fetchRestaurants })(Search);
