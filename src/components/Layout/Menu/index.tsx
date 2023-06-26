import { useState } from 'react';
import styles from './Menu.module.css';
import {
  X,
  List,
  Question,
  ShoppingCartSimple,
  Heart,
  User,
} from 'phosphor-react';
import Link from 'next/link';

function Menu(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (): void => {
    setIsModalOpen(true);
  };

  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {!isModalOpen && (
        <button className={styles.openMenu} onClick={handleButtonClick}>
          <List size={20} />
        </button>
      )}

      {isModalOpen && (
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Menu</h1>
            <button className={styles.closeMenu} onClick={handleModalClose}>
              <X size={20} />
            </button>
          </div>

          <div className={styles.content}>
            <div className={styles.sidebar}>
              <Link href='/Account' legacyBehavior>
                <a>
                  <User size={26} color='#0066ff' weight='fill' />
                  <p>Entrar</p>
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
                  <Question size={26} color='#0066ff' weight='fill' />
                  <p>Suporte</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
