import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addProduct } from './favoriteProductsSlice.js';
import { loadData, selectFilteredAllProducts } from './allProductsSlice.js';
import FavoriteButton from "./FavoriteButton";
import Product from "./Product";

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

export const AllProducts = () => {
  const allProducts = useSelector(selectFilteredAllProducts);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, []);
  
  const onAddProductHandler = (product) => {
    dispatch(addProduct(product));
  };
  
  
  return (
    <div className="recipes-container">
      {allProducts.map((product) => (
        <Product product={product} key={product.id}>
          <FavoriteButton
            onClickHandler={() => onAddProductHandler(product)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Product>
      ))}
    </div>
  );
};
