import {
  User,
  ShoppingCartSimple,
  MagnifyingGlass,
  Question,
  Heart,
} from 'phosphor-react';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <Link href='/' legacyBehavior>
        <div className={styles.title}>
          <Image src='/images/logo.png' width={720} height={720} alt='' />
          <h1>E-commerce</h1>
        </div>
      </Link>
      <div className={styles.search}>
        <MagnifyingGlass size={25} color='#fff' weight='bold' />
        <input type='text' id='search' placeholder='Buscar...' />
      </div>
      <div className={styles.user}>
        <Link href='/Account' legacyBehavior>
          <a>
            <Question size={32} color='#0066ff' weight='bold' />
            <p>Suporte</p>
          </a>
        </Link>

        <Link href='/ShoppingCart' legacyBehavior>
          <a>
            <ShoppingCartSimple size={32} color='#0066ff' weight='bold' />
            <p>Carrinho</p>
          </a>
        </Link>

        <Link href='/Favorites' legacyBehavior>
          <a>
            <Heart size={32} color='#0066ff' weight='bold' />
            <p>Favoritos</p>
          </a>
        </Link>

        <Link href='/Account' legacyBehavior>
          <a>
            <User size={32} color='#0066ff' weight='bold' />
            <p>Entrar</p>
          </a>
        </Link>
      </div>
    </nav>
  );
}
