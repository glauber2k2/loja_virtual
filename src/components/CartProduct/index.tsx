import { useState } from 'react';

import Image from 'next/image';
import styles from './CartProduct.module.css';

export default function CartProduct() {
  const [qtd, setQtd] = useState<number>(1);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQtd(Number(e.target.value));
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (Number(e.target.value) < 1) {
      setQtd(1);
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
            height={420}
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
            min={1}
          />
          <button>remover</button>
        </div>

        <h4>R$ 799.99</h4>
      </div>
    </>
  );
}
