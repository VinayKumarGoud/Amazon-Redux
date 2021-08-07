import allProductsData from '../Data.js'
import { selectSearchTerm } from './searchTermSlice.js';

export const loadData = () => {
  return {
    type: 'allProducts/loadData',
    payload: allProductsData
  }
}

const initialState = [];
export const allProductsReducer = (allProducts = initialState, action) => {
  switch (action.type) {
    case 'allProducts/loadData':
      return action.payload;
    case 'favoriteProducts/addProduct':
      return allProducts.filter(product => product.id !== action.payload.id);
    case 'favoriteProducts/removeRProduct':
      return [...allProducts, action.payload]
    default:
      return allProducts;
  }
}

export const selectAllProducts = (state) => state.allProducts;

export const selectFilteredAllProducts = (state) => {
  const allProducts = selectAllProducts(state);
  const searchTerm = selectSearchTerm(state);

  return allProducts.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

