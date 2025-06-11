import React, { useEffect, useState } from 'react';
import '../css/customer_home.css';

export default function Customer_home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:8080/getAllProducts");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

    return (
    <div className="customer-home">
      <h2>Customer Home</h2>
      <div className="product-list">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.photo} alt={p.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{p.name}</h3>
              <p className="product-price">${p.price}</p>
              <p className="product-description">{p.descritption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
