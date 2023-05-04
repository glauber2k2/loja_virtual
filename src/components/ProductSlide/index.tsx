import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Item from '../Layout/Item/index';

import styles from './ProductSlide.module.css';

interface slideProps {
  title: string;
}

export default function ProductSlide({ title }: slideProps) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',

    slides: {
      perView: 3.5,
      spacing: 15,
    },
  });

  return (
    <>
      <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.products}>
          <div ref={ref} className='keen-slider' style={{}}>
            <div className='keen-slider__slide'>
              <Item
                src='https://m.media-amazon.com/images/I/51E57XX95kL._AC_SX695_.jpg'
                name='Sapato Vans'
                price='599'
                alt='teste'
                id='1'
              />
            </div>

            <div className='keen-slider__slide'>
              <Item
                src='https://m.media-amazon.com/images/I/61xSpcGMUhL.__AC_SX300_SY300_QL70_ML2_.jpg'
                name='Monitor '
                price='1.200'
                alt='teste'
                id='1'
              />
            </div>

            <div className='keen-slider__slide'>
              <Item
                src='https://m.media-amazon.com/images/I/81Yleainj1L._AC_SX522_.jpg'
                name='SSD Kingston'
                price='500'
                alt='teste'
                id='1'
              />
            </div>

            <div className='keen-slider__slide'>
              <Item
                src='https://m.media-amazon.com/images/I/818P+qYvSHS._AC_SX300_SY300_.jpg'
                name='Impressora'
                price='1.100'
                alt='teste'
                id='1'
              />
            </div>

            <div className='keen-slider__slide'>
              <Item
                src='https://m.media-amazon.com/images/I/61QUveKcmIL._AC_SX522_.jpg'
                name='Monitor'
                price='1.500'
                alt='teste'
                id='1'
              />
            </div>

            <div className='keen-slider__slide'>
              <Item
                src='https://m.media-amazon.com/images/I/61vdNn+737L._AC_SX522_.jpg'
                name='Kit Periféricos'
                price='200'
                alt='teste'
                id='1'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
