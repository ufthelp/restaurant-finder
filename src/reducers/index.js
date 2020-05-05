import {combineReducers} from 'redux';

import { SET_RESTAURANTS, FILTER_BY_VALUE } from '../actions';


function restaurants(state = [], action) {
    switch(action.type){
        case SET_RESTAURANTS:
            return action.items;
        default:
            return state;
    }
}
function sortMethod(state, action) {
    if(action && action.payload && action.payload.property) {
        return { sortMethod: action.payload.property };
    }
    return { ...state };
}


function filterStore (state = [], action) {
    switch (action.type) {
        case FILTER_BY_VALUE:
            //the value passed from our presentational component
            let value = action.payload.value.toLowerCase();
            let filteredValues = action.items.filter(product => {
                //return any product whose name or designer contains the input box string
                return product.name.toLowerCase().includes(value) ||
                    product.area.toLowerCase().includes(value);
            });
            
            let result = [{...state, restaurants: filteredValues}];
            console.log('printing result',result);
            return result;
        default:
            return state;

    }
}


const rootReducer = combineReducers({ restaurants, sortMethod, filterStore });

export default rootReducer;

