import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import Item from '../components/Layout/Item/Index';
import Navbar from '../components/Layout/Navbar';

// import styles from '../styles/Home.module.css';

export default function Home() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',

    slides: {
      perView: 3,
      spacing: 50,
    },
  });

  return (
    <div>
      <div
        ref={ref}
        className='keen-slider'
        style={{
          marginInline: `${'auto'}`,
          marginTop: `${'5em'}`,
          width: `${'70em'}`,
        }}
      >
        <div className='keen-slider__slide'>
          <Item
            src='https://m.media-amazon.com/images/I/51E57XX95kL._AC_SX695_.jpg'
            name='Sapato Vans'
            price={599}
            alt='teste'
            id='1'
          />
        </div>

        <div className='keen-slider__slide'>
          <Item
            src='https://m.media-amazon.com/images/I/51E57XX95kL._AC_SX695_.jpg'
            name='Sapato Vans'
            price={5.599}
            alt='teste'
            id='1'
          />
        </div>

        <div className='keen-slider__slide'>
          <Item
            src='https://m.media-amazon.com/images/I/51E57XX95kL._AC_SX695_.jpg'
            name='Sapato Vans'
            price={599}
            alt='teste'
            id='1'
          />
        </div>

        <div className='keen-slider__slide'>
          <Item
            src='https://m.media-amazon.com/images/I/51E57XX95kL._AC_SX695_.jpg'
            name='Sapato Vans'
            price={599}
            alt='teste'
            id='1'
          />
        </div>

        <div className='keen-slider__slide'>
          <Item
            src='https://m.media-amazon.com/images/I/51E57XX95kL._AC_SX695_.jpg'
            name='Sapato Vans'
            price={599}
            alt='teste'
            id='1'
          />
        </div>
      </div>
    </div>
  );
}
