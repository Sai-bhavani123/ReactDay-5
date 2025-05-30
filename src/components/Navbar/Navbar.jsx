import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>Product Mart</h1>
        </Link>
        <div className="nav-links">
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/recipes" className="nav-link">Recipes</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;