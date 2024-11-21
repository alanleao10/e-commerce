import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router,Routes, rou } from "react-router-dom";
import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
      <h1 className="logo">
        KEK <span>VARIEDADES</span>
      </h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
          <li><Link to="/produts">Produtos</Link></li>
        </ul>
        <ul>
          <li><Link to="/sobrs">Sobre</Link></li>
        </ul>
        <ul>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
        <ul>
          <li><Link to="/cont">Conta</Link></li>
        </ul>
      </nav>
      <div className="navs-icon-container">
        <div className="search-input-container">
          <input type="search"/>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </div>
        <button className="shopping-cart">
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          <div className="products-cont">0</div>
        </button>
        <button className="menu-button">
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
    </div>
    </Router>
  );
}

export default App;
