import Image from 'next/image';

import styles from './Item.module.css';

interface ItemProps {
  src: string;
  price: string;
  name: string;
  alt: string;
  id: string;
}

export default function Item({ src, price, name, alt, id }: ItemProps) {
  return (
    <div className={styles.container_item}>
      <img src={src} width={300} height={200} alt={alt} />

      <h3>
        {name} <span>R$ {price}</span>
      </h3>
    </div>
  );
}
