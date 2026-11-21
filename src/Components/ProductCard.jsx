import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <small>{product.category}</small>
      <h3>{product.title}</h3>
      <p className="price">{product.price} $</p>
      <Link to={`/product/${product.id}`}>
        <button>Détails</button>
      </Link>
    </div>
  );
}
