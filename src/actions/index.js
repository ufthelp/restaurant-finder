
/**
 * Action types
 */
export const FETCH_RESTAURANTS  = 'FETCH_RESTAURANTS';
export const SET_RESTAURANTS = 'SET_RESTAURANTS';
export const SET_SORT_METHOD = 'SET_SORT_METHOD';
export const FILTER_BY_VALUE = "FILTER_BY_VALUE";
/**
 * Supporting constants
 */

export const SortMethods = {
    PRICE: 'price',
    NAME: 'name',
};

/**
 * Action creators
 */

export const setSortMethod = (property) =>{
    return {
        type: SET_SORT_METHOD,
        payload: {
            property,
        },
    };
};

export const setRestaurants = (items) => {
    return {
        type: SET_RESTAURANTS,
        items
    };
};

export const filterByValue = (payload, items) => {
    return {
        type: FILTER_BY_VALUE,
        payload,
        items
    }
};

// Base URL fot the JSON API 
const ROOT_URL = 'http://opentable.herokuapp.com/api/restaurants';

function fetchRestaurantsJSON(city){
    let url = `${ROOT_URL}?city=${city}`;
    return fetch(url)
        .then(response => response.json());
}

// To fetch the restaurants list
export function fetchRestaurants(city) {
    return function(dispatch){
        return fetchRestaurantsJSON(city)
        .then(json => dispatch(setRestaurants(json.restaurants)));
    
    };
};






