import { useState, useEffect } from 'react';

import Image from 'next/image';
import styles from './CartProduct.module.css';

import { Trash } from 'phosphor-react';

interface Product {
  name?: string;
  photoUrl?: string;
  description?: string;
  price?: number;
}
interface CardProps {
  id: number;
}

export default function CartProduct({ id }: CardProps) {
  const [qtd, setQtd] = useState<number>(1);
  const [product, setProduct] = useState<Product>({
    name: '',
    photoUrl: '',
    description: '',
    price: 0,
  });

  useEffect(() => {
    fetch(`https://json-server-loja.vercel.app/products/${id}`, {
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQtd(Number(e.target.value));
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (Number(e.target.value) < 1) {
      setQtd(1);
    }
  }

  function handleDeleteItem() {
    fetch(`https://json-server-loja.vercel.app/users/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        let updatedCart;

        updatedCart = data.shoppingCart.filter((f: CardProps) => f.id !== id);

        fetch(`https://json-server-loja.vercel.app/users/1`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ shoppingCart: updatedCart }),
        })
          .then((resp) => resp.json())
          .then((data) => {})
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    location.reload();
  }

  return (
    <>
      <hr />
      <div className={styles.container}>
        <div className={styles.product}>
          <Image
            src={product.photoUrl || '/images/loading.gif'}
            width={420}
            height={420}
            alt={product.name || 'Product'}
          />

          <p>{product.name}</p>
        </div>

        <div className={styles.quantity}>
          <input
            type='number'
            name=''
            value={qtd}
            onChange={handleChange}
            onBlur={handleBlur}
            min={1}
          />
          <button onClick={handleDeleteItem}>
            <Trash size={22} color='#e61e1e' weight='bold' />
          </button>
        </div>

        <h4>R$ {product.price}</h4>
      </div>
    </>
  );
}
