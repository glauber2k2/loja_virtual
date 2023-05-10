import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name?: string;
  photoUrl?: string;
  description?: string;
  price?: number;
}

export default function Products() {
  const [item, setItem] = useState(''); //precisa pegar o valor digitado em Search
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data: Product[]) => {
        const filteredProducts = data.filter((product) =>
          product.name?.includes(item)
        );
        setProduct(filteredProducts);
      })
      .catch();
  }, [item]);

  return (
    <div>
      <ul>
        {product.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
