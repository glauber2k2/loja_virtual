import CartProduct from '../../components/CartProduct';
import styles from './ShoppingCart.module.css';

export default function ShoppingCart() {
  return (
    <div className={styles.container}>
      <h1>Seu Carrinho:</h1>
      <CartProduct />
      <CartProduct />
    </div>
  );
}
