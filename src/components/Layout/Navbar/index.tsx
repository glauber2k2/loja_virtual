import { User, ShoppingCartSimple, MagnifyingGlass } from 'phosphor-react';
import Link from 'next/link';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <Link href='/' legacyBehavior>
        <div className={styles.title}>
          <ShoppingCartSimple size={32} color='#0066ff' weight='bold' />
          <h1>E-commerce</h1>
        </div>
      </Link>
      <div className={styles.search}>
        <MagnifyingGlass size={25} color='#fff' weight='bold' />
        <input type='text' id='search' placeholder='Buscar...' />
      </div>
      <div className={styles.user}>
        <User size={32} color='#0066ff' weight='bold' />
        <Link href='/Account' legacyBehavior>
          <a>Entrar</a>
        </Link>

        <ShoppingCartSimple size={32} color='#0066ff' weight='bold' />
        <Link href='/Account' legacyBehavior>
          <a>Carrinho</a>
        </Link>
      </div>
    </nav>
  );
}
