import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import Navbar from '../components/Layout/Navbar';

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
    <>
      <ProductSlide title='Top vendas' />
      <ProductSlide title='Calçados' />
      <ProductSlide title='Mais vendidos:' />
    </>
  );
}
