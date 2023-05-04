import Image from 'next/image';

import styles from './Item.module.css';

interface ItemProps {
  src: string;
  price: number;
  name: string;
  alt: string;
  id: string;
}

export default function Item({ src, price, name, alt, id }: ItemProps) {
  return (
    <div className={styles.container_item}>
      <div className={styles.imageContainer}>
        <img src={src} alt={alt} />
      </div>

      <h3>
        {name} <span>R$ {price}</span>
      </h3>
    </div>
  );
}
