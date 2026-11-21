import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";

const API_URL = "https://fakestoreapi.com/products";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Impossible de charger les produits.");
        setLoading(false);
      });
  }, []);

  function handleSearch() {
    if (searchId.trim() === "") return;

    fetch(`${API_URL}/${searchId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.id) {
          setError("");
          navigate(`/product/${data.id}`);
        } else {
          setError("Aucun produit trouvé avec cet ID.");
        }
      })
      .catch(() => setError("Erreur lors de la recherche."));
  }

  if (loading) return <p className="message">Chargement...</p>;

  return (
    <div className="container">
      <h1>Nos produits</h1>

      <SearchBar
        searchId={searchId}
        setSearchId={setSearchId}
        onSearch={handleSearch}
      />

      {error && <p className="error">{error}</p>}

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
