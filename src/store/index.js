import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import { SortMethods } from '../actions';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function initStore(initialData = []) {
  const initialState = {
    restaurants: initialData,
    sortMethod: {
      sortMethod: SortMethods.NAME
    },
    //appliedFilters: []
  };
  return createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
}
