import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeProduct, selectFilteredFavoriteProducts } from './favoriteProductsSlice.js';
import FavoriteButton from "./FavoriteButton";
import Product from "./Product";
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg';

export const FavoriteProducts = () =>{
  const favoriteProducts = useSelector(selectFilteredFavoriteProducts);
  const dispatch = useDispatch();

  const onRemoveProductHandler = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div className="recipes-container">
      {favoriteProducts.map(createProductComponent)}
    </div>
  );

  // Helper Function
  function createProductComponent(product) {
    return (
      <Product product={product} key={product.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveProductHandler(product)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Product>
    )
  } 
};
