import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Product {
  id: number;
  name?: string;
  photoUrl?: string;
  description?: string;
  price?: number;
}

export default function Products() {
  const [product, setProduct] = useState<Product[]>([]);

  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const { q } = router.query;
    if (q) {
      setSearchValue(q.toString());
    }
  }, [router.query]);

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
          product.name?.toLowerCase().includes(searchValue.toLowerCase())
        );
        setProduct(filteredProducts);
      })
      .catch();
  }, [searchValue]);

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
