import { useState, useEffect } from 'react';

import CartProduct from '../../components/CartProduct';
import styles from './ShoppingCart.module.css';

interface Cart {
  id: number;
}

export default function ShoppingCart() {
  const [cart, setCart] = useState<Cart[]>([]);
  const [price, setPrice] = useState<number[]>([]);

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
        console.log(data.shoppingCart);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const pricePromises = cart.map((item) => {
          return fetch(
            `https://json-server-loja.vercel.app/products/${item.id}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          ).then((resp) => resp.json());
        });

        const prices = await Promise.all(pricePromises);
        const priceValues = prices.map((data) => data.price);
        setPrice(priceValues);
        console.log(priceValues);
      } catch (err) {
        console.log(err);
      }
    };

    if (cart.length > 0) {
      fetchPrices();
    }
  }, [cart]);

  const totalPrice = price.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <div className={styles.container}>
      <h1>Seu Carrinho:</h1>
      <div className={styles.cart}>
        {cart.map((item: Cart) => (
          <CartProduct key={item.id} id={item.id} />
        ))}
      </div>
      <div className={styles.total}>
        <h1>Efetuar compra:</h1>
        <p>
          Valor da compra: <span>R$ {totalPrice}</span>
        </p>
        <label htmlFor='frete'>Calcular frete:</label>
        <input type='text' placeholder='Digite seu CEP' />

        <label htmlFor='cupom'>Cupom de desconto:</label>
        <input type='text' placeholder='Digite seu cupom' />

        <button>APLICAR</button>

        <div className={styles.cost}>
          <span>Valor total:</span>
          <span>R$ {totalPrice}</span>
        </div>
        <button>Efetuar compra</button>
      </div>
    </div>
  );
}
