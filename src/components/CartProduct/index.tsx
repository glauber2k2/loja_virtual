import { useState } from 'react';

import Image from 'next/image';
import styles from './CartProduct.module.css';

export default function CartProduct() {
  const [qtd, setQtd] = useState(1);

  function handleChange(e) {
    setQtd(e.target.value);
  }

  function handleBlur(e) {
    if (e.target.value < 0) {
      setQtd(0);
    }
  }

  return (
    <>
      <hr />
      <div className={styles.container}>
        <div className={styles.product}>
          <Image
            src='https://m.media-amazon.com/images/I/41z1nkZ7cvL._AC_SR400,600_.jpg'
            width={420}
            height={200}
            alt=''
          />

          <p>Smartwatch Preto Pulseira de Couro</p>
        </div>

        <div className={styles.quantity}>
          <input
            type='number'
            name=''
            value={qtd}
            onChange={handleChange}
            onBlur={handleBlur}
            min={0}
          />
          <button>remover</button>
        </div>

        <h4>R$ 799.99</h4>
      </div>
    </>
  );
}
