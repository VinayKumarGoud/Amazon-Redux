
import { createStore, combineReducers } from 'redux';
import { favoriteProductsReducer } from './Components/favoriteProductsSlice.js';
import { searchTermReducer } from './Components/searchTermSlice.js';
import { allProductsReducer } from './Components/allProductsSlice.js';

export const store = createStore(combineReducers({
  favoriteProducts: favoriteProductsReducer,
  searchTerm: searchTermReducer,
  allProducts: allProductsReducer
}));
