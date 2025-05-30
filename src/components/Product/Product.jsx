import './Product.css';

const Product = ({ SingleP }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={SingleP.thumbnail} alt={SingleP.title} />
      </div>
      <div className="product-details">
        <h3>{SingleP.title}</h3>
        <p className="product-description">{SingleP.description.substring(0, 60)}...</p>
        <p className="product-price">${SingleP.price}</p>
        <p className="product-rating">Rating: {SingleP.rating}/5</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;