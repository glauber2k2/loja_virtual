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
      <div className={styles.cart}>
        {cart.map((item: Cart) => (
          <>
            <CartProduct key={item.id} id={item.id} />
          </>
        ))}
      </div>
      <div className={styles.total}>
        <h1>Efetuar compra:</h1>
        <p>
          Valor da compra: <span>R$ 00,00</span>
        </p>
        <label htmlFor='frete'>Calcular frete:</label>
        <input type='text' placeholder='Digite seu CEP' />

        <label htmlFor='cupom'>Cupom de desconto:</label>
        <input type='text' placeholder='Digite seu cupom' />

        <button>APLICAR</button>

        <div className={styles.cost}>
          <span>Valor total:</span>
          <span>R$ 00,00</span>
        </div>
        <button>Efetuar compra</button>
      </div>
    </div>
  );
}
