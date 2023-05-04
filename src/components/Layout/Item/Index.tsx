import Image from 'next/image';

import styles from './Item.module.css';

interface ItemProps {
  src: string;
  price: string;
  name: string;
  alt: string;
}

export default function Item({ src, price, name, alt }: ItemProps) {
  return (
    <div className={styles.container_item}>
      <div className={styles.imageContainer}>
        <Image src={src} alt={alt} width={420} height={420} />
      </div>

      <h3>
        {name} <span>R$ {price}</span>
      </h3>
    </div>
  );
}
