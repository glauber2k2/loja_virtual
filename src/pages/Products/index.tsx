import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Product from '../../components/Layout/Product';

import styles from './Products.module.css';
interface Product {
  id: number;
  name?: string;
  photoUrl?: string;
  description?: string;
  price?: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Definido como true inicialmente
  const router = useRouter();

  useEffect(() => {
    const { q } = router.query;
    const searchValue = q ? q.toString() : '';

    if (searchValue) {
      setIsLoading(true); // Define como true antes de buscar os resultados

      fetch('https://json-server-loja.vercel.app/products', {
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
          setProducts(filteredProducts);
        })
        .catch()
        .finally(() => {
          setIsLoading(false); // Define como false quando os resultados estão prontos
        });
    } else {
      setProducts([]);
    }
  }, [router.query]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Product
                src={product.photoUrl || '/images/loading.gif'}
                name={product.name || ''}
                price={product.price || 0}
                alt={product.name || ''}
                id={product.id}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
