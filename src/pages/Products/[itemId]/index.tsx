import Image from 'next/image';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import FavoriteButton from '../../../components/buttons/FavoriteButton';

import styles from './item.module.css';

interface Product {
  id: number;
  name?: string;
  photoUrl?: string;
  description?: string;
  price?: number;
}

interface ItemProps {
  item: Product;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  const data = await fetch(
    `https://json-server-loja.vercel.app/products/${params?.itemId ?? ''}`
  );

  const item = await data.json();

  return {
    props: { item },
  };
}

export async function getStaticPaths() {
  const response = await fetch('https://json-server-loja.vercel.app/products');

  const data = await response.json();

  const paths = data.map((item: Product) => {
    return {
      params: {
        itemId: `${item.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Item({ item }: ItemProps) {
  return (
    <>
      <Head>
        <title>{`${item.name?.split(' ')[0]} - Monteiro`}</title>
      </Head>
      <div className={styles.Search}></div>

      <div className={styles.container}>
        <div className={styles.productImage}>
          <Image
            src={item.photoUrl ? item.photoUrl : ''}
            width={420}
            height={420}
            alt={item.name ? item.name : ''}
            className={styles.photoItem}
          />

          <FavoriteButton id={item.id} />
        </div>
        <div className={styles.description}>
          <h1>{item.name}</h1>
          <h3>R$ {item.price}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </>
  );
}
