import { selectSearchTerm } from './searchTermSlice.js';

const initialState = [];
export const favoriteProductsReducer = (favoriteProducts = initialState, action) => {
  switch (action.type) {
    case 'favoriteProducts/addProduct':
      return [...favoriteProducts, action.payload]
    case 'favoriteProducts/removeProduct':
      return favoriteProducts.filter(product => product.id !== action.payload.id)
    default:
      return favoriteProducts;
  }
}

export function addProduct(product) {
  return {
    type: 'favoriteProducts/addProduct',
    payload: product
  }
}

export function removeProduct(product) {
  return {
    type: 'favoriteProducts/removeProduct',
    payload: product
  }
}

export const selectFavoriteProducts = (state) => state.favoriteProducts;

export const selectFilteredFavoriteProducts = (state) => {
  const favoriteProducts = selectFavoriteProducts(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteProducts.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
