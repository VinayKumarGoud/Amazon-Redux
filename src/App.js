import React from 'react';


import './App.css';


import { loadData } from './Components/allProductsSlice.js';
import { AllProducts } from './Components/AllProducts.js';
import { SearchTerm } from './Components/SearchTerm.js';
import { FavoriteProducts } from './Components/FavoriteProducts.js';

export function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Products</h2>
        <FavoriteProducts />
      </section>
      <hr />
      <section>
        <h2>All Products</h2>
        <AllProducts />
      </section>
    </main>
  )
}


export default App;
