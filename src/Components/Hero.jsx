import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>E-Shop</h1>
        <p>
          Découvrez notre sélection de produits : vêtements, bijoux et
          accessoires high-tech, à prix doux et livrés chez vous.
        </p>
        <Link to="/products">
          <button className="hero-btn">Découvrir nos produits</button>
        </Link>
      </div>
    </section>
  );
}
