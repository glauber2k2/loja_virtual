import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Product from '../Layout/Product';
import { useState, useEffect } from 'react';

import styles from './ProductSlide.module.css';

interface slideProps {
  title: string;
  type: string;
}

interface ProductProps {
  id: number;
  name: string;
  photoUrl: string;
  price: number;
  category: string;
}

export default function ProductSlide({ title, type }: slideProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [screen, setScreen] = useState(5.5);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setScreen(2.5);
    }
  }, []);
  useEffect(() => {
    fetch(`https://json-server-loja.vercel.app/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        const homeProducts = data.filter(
          (product: ProductProps) => product.category === type
        );
        console.log(homeProducts);
        setProducts(homeProducts);
      })
      .catch((err) => console.log(err));
  }, [type]);

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',

    slides: {
      perView: screen,
      spacing: 15,
    },
  });

  return (
    <>
      <div className={styles.container}>
        <h1>{title}</h1>
        <div className={styles.products}>
          {products.length > 0 && ( // verifique se products não está vazio
            <div ref={ref} className='keen-slider' style={{}}>
              {products.map((item) => (
                <div key={item.id} className='keen-slider__slide'>
                  <Product
                    src={item.photoUrl}
                    name={item.name.slice(0, 30)}
                    price={item.price}
                    alt={item.name}
                    id={item.id}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
