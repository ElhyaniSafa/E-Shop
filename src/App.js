import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}