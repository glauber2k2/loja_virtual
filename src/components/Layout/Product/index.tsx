import Image from 'next/image';
import Link from 'next/link';

import styles from './Product.module.css';

interface ItemProps {
  id: number;
  src: string;
  price: number;
  name: string;
  alt: string;
}

export default function Product({ id, src, price, name, alt }: ItemProps) {
  return (
    <div className={styles.container_item}>
      <Link href={`/Products/${id}`} legacyBehavior>
        <span className={styles.content}>
          <Image src={src} alt={alt} width={1280} height={1280} />

          <h4>{name.length > 35 ? `${name.slice(0, 35)}...` : name}</h4>
          <span>R$ {price},00</span>
        </span>
      </Link>
    </div>
  );
}
