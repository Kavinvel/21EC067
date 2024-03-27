import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNTIxNjg0LCJpYXQiOjE3MTE1MjEzODQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImM2M2Q2NjZmLWZjMmUtNGMyYy04NmU2LTA2NDk2ZmUxNTk1NiIsInN1YiI6ImthdmludmVsNjcwMEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6ImM2M2Q2NjZmLWZjMmUtNGMyYy04NmU2LTA2NDk2ZmUxNTk1NiIsImNsaWVudFNlY3JldCI6Im5PV2VQTVNEcHRaT0NSSHAiLCJvd25lck5hbWUiOiJrYXZpbnZlbCIsIm93bmVyRW1haWwiOiJrYXZpbnZlbDY3MDBAZ21haWwuY29tIiwicm9sbE5vIjoiMjFFQzA2NyJ9.LLj0aQHdJuVEqB4uMNGGG6hkcuu3Pb-kp5qBPOGlJ_A'; // Your authentication token
        const response = await fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Load
    
    
    </div>;

  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.productName}>
            <h2>{product.productName}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
