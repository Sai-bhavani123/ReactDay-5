import React from 'react';
import { recipes } from '../../data/RecipesData';
import Recipe from '../Recipe/Recipe';
import './Recipes.css';

const Recipes = () => {
  return (
    <div className="recipes-container">
      <h2>Delicious Recipes</h2>
      <div className="recipes-grid">
        {recipes.recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;