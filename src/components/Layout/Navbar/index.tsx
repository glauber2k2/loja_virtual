import {
  User,
  ShoppingCartSimple,
  MagnifyingGlass,
  Question,
  Heart,
} from 'phosphor-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.css';
import Menu from '../Menu';

export default function Navbar(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(event.target.value);
  };

  const handleSearchFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    if (searchValue.trim()) {
      window.location.href = `/Products?q=${searchValue.trim()}`;
    }
  };

  useEffect(() => {
    const handleWindowResize = (): void => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleWindowResize(); // Executa a função uma vez no momento da montagem

    // Adiciona um event listener para lidar com a alteração de tamanho da janela
    window.addEventListener('resize', handleWindowResize);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <nav className={styles.navbar_container}>
      <Link href='/' legacyBehavior>
        <div className={styles.title}>
          <Image src='/images/logo.png' width={720} height={720} alt='' />
          <h1>E-commerce</h1>
        </div>
      </Link>
      <form className={styles.search} onSubmit={handleSearchFormSubmit}>
        <MagnifyingGlass size={25} color='#fff' weight='duotone' />
        <input
          type='text'
          value={searchValue}
          onChange={handleSearchInputChange}
          id='search'
          placeholder='Buscar produto...'
          autoComplete='off'
        />
        <button type='submit' style={{ display: 'none' }}></button>
      </form>

      {!isMobile && (
        <div className={styles.user}>
          <Link href='/Account' legacyBehavior>
            <a>
              <Question size={26} color='#0066ff' weight='fill' />
              <p>Suporte</p>
            </a>
          </Link>

          <Link href='/ShoppingCart' legacyBehavior>
            <a>
              <ShoppingCartSimple size={26} color='#0066ff' weight='fill' />
              <p>Carrinho</p>
            </a>
          </Link>

          <Link href='/Favorites' legacyBehavior>
            <a>
              <Heart size={26} color='#0066ff' weight='fill' />
              <p>Favoritos</p>
            </a>
          </Link>

          <Link href='/Account' legacyBehavior>
            <a>
              <User size={26} color='#0066ff' weight='fill' />
              <p>Entrar</p>
            </a>
          </Link>
        </div>
      )}

      {isMobile && <Menu />}
    </nav>
  );
}
