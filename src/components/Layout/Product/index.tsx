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
        <span>
          <div className={styles.imageContainer}>
            <Image src={src} alt={alt} width={1280} height={1280} />
          </div>

          <div className={styles.titleAndValue}>
            <h4>{name}</h4> <span>R$ {price}</span>
          </div>
        </span>
      </Link>
    </div>
  );
}
