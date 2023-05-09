import Image from 'next/image';

import styles from './Product.module.css';

interface ItemProps {
  src: string;
  price: number;
  name: string;
  alt: string;
}

export default function Product({ src, price, name, alt }: ItemProps) {
  return (
    <div className={styles.container_item}>
      <div className={styles.imageContainer}>
        <Image src={src} alt={alt} width={1280} height={1280} />
      </div>

      <div className={styles.titleAndValue}>
        <h4>{name}</h4> <span>R$ {price}</span>
      </div>
    </div>
  );
}
