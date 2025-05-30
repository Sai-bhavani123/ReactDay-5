import './Recipe.css';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.name} />
      </div>
      <div className="recipe-details">
        <h3>{recipe.name}</h3>
        <div className="recipe-meta">
          <span>⏱️ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
          <span>🍽️ {recipe.servings} servings</span>
          <span>⭐ {recipe.rating} ({recipe.reviewCount})</span>
        </div>
        <div className="recipe-tags">
          {recipe.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <Link to={`/recipes/${recipe.id}`} className="view-recipe">
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;