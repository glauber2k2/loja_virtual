import { useState, useEffect } from 'react';
import { Heart } from 'phosphor-react';

import Image from 'next/image';
import styles from './FavoriteCard.module.css';

interface Product {
  name?: string;
  photoUrl?: string;
  description?: string;
  price?: number;
}

interface CardProps {
  id: number;
}

export default function FavoriteCard({ id }: CardProps) {
  const [product, setProduct] = useState<Product>({
    name: '',
    photoUrl: '',
    description: '',
    price: 0,
  });

  const [hearthIcon, setHearthIcon] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleChangeColorIcon() {
    setHearthIcon(Boolean(!hearthIcon));
    console.log(product);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.product}>
          <Image
            src={product.photoUrl || '/placeholder.png'}
            width={420}
            height={420}
            alt={product.name || 'Product'}
          />
          <div>
            <p>{product.name}</p>
            <article>{product.description}</article>
          </div>
        </div>

        <h4>R$ {product.price}</h4>
        <button onClick={handleChangeColorIcon}>
          <Heart
            size={32}
            weight={hearthIcon ? 'bold' : 'fill'}
            color={hearthIcon ? '#00000059' : '#0066ff'}
          />
        </button>
      </div>
    </>
  );
}
