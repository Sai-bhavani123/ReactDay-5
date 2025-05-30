import './RecipeDetail.css';

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="recipe-detail-container">
      <div className="recipe-header">
        <h2>{recipe.name}</h2>
        <div className="recipe-meta">
          <span>⏱️ Prep: {recipe.prepTimeMinutes} min | Cook: {recipe.cookTimeMinutes} min</span>
          <span>🍽️ Servings: {recipe.servings}</span>
          <span>⭐ Rating: {recipe.rating} ({recipe.reviewCount} reviews)</span>
        </div>
        <img src={recipe.image} alt={recipe.name} className="recipe-main-image" />
      </div>

      <div className="recipe-content">
        <div className="ingredients-section">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="instructions-section">
          <h3>Instructions</h3>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="recipe-tags">
        {recipe.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetail;