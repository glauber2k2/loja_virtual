import { useState, useEffect } from 'react';

import CartProduct from '../../components/CartProduct';
import styles from './ShoppingCart.module.css';

interface Cart {
  id: number;
}
export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://json-server-loja.vercel.app/users/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCart(data.shoppingCart);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Seu Carrinho:</h1>
      {cart.map((item: Cart) => (
        <>
          <CartProduct key={item.id} id={item.id} />
        </>
      ))}
    </div>
  );
}
