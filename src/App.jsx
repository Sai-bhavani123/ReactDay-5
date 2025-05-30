import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import Recipes from './components/Recipes/Recipes';
import { useParams } from 'react-router-dom';
import { products } from './data/Data';
import { recipes } from './data/RecipesData';
import Product from './components/Product/Product';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />
      </Routes>
    </div>
  );
};

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.products.find((p) => p.id === parseInt(id));
  return <Product product={product} />;
};

const SingleRecipe = () => {
  const { id } = useParams();
  const recipe = recipes.recipes.find((r) => r.id === parseInt(id));
  return <RecipeDetail recipe={recipe} />;
};

export default App;