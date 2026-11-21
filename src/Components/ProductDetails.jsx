import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="message">Chargement...</p>;

  return (
    <div className="container">
      <Link to="/" className="back">← Retour aux produits</Link>

      <div className="details">
        <img src={product.image} alt={product.title} />

        <div>
          <small>{product.category}</small>
          <h2>{product.title}</h2>
          <p className="rating">
       {product.rating.rate} ({product.rating.count} avis)
          </p>
          <p className="price">{product.price} $</p>
          <h4>Description</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
