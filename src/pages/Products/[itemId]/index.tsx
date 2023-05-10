import Image from 'next/image';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';

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
    `http://localhost:5000/products/${params?.itemId ?? ''}`
  );

  const item = await data.json();

  return {
    props: { item },
  };
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:5000/products');

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
        <title>{item.name?.split(' ')[0]} - Monteiro</title>
      </Head>
      <div className={styles.Search}></div>

      <div className={styles.container}>
        <Image
          src={item.photoUrl ? item.photoUrl : ''}
          width={420}
          height={420}
          alt={item.name ? item.name : ''}
          className={styles.photoitem}
        />
        <h1>{item.name}</h1>
      </div>
    </>
  );
}
