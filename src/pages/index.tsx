import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import Image from 'next/image';

import styles from '../styles/Home.module.css';
import ProductSlide from '@/components/ProductSlide';

export default function Home() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',

    slides: {
      perView: 4,
      spacing: 15,
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <Image src='/images/logo.png' width={420} height={420} alt='' />
        <main>
          <h1>E-Commerce</h1>
          <article>
            <p> Aqui você iá encontrar tudo que precisa, e naquele precinho.</p>
          </article>
        </main>
      </div>

      <ProductSlide title='Livros' type='books' />
      <ProductSlide title='Eletronicos' type='electronics' />
    </div>
  );
}
