import { useState, useEffect } from 'react';
import { Heart } from 'phosphor-react';

import styles from './FavoriteButton.module.css';

interface ButtonProps {
  id: number;
}

export default function FavoriteButton({ id }: ButtonProps) {
  const [hearthIcon, setHearthIcon] = useState(true);

  useEffect(() => {
    fetch(`https://json-server-loja.vercel.app/users/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        let stateFavoriteIcon;
        const isItemInFavorites = data.favorites.some(
          (f: ButtonProps) => f.id === id
        );

        if (isItemInFavorites) {
          setHearthIcon(true);
          stateFavoriteIcon = data.favorites.filter(
            (f: ButtonProps) => f.id !== id
          );
        } else {
          setHearthIcon(false);
          stateFavoriteIcon = [...data.favorites, { id }];
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleChangeFavoriteState() {
    setHearthIcon(!hearthIcon);

    fetch(`https://json-server-loja.vercel.app/users/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        let updatedFavorites;
        const isItemInFavorites = data.favorites.some(
          (f: ButtonProps) => f.id === id
        );

        if (isItemInFavorites) {
          updatedFavorites = data.favorites.filter(
            (f: ButtonProps) => f.id !== id
          );
        } else {
          updatedFavorites = [...data.favorites, { id }];
        }

        fetch(`https://json-server-loja.vercel.app/users/1`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ favorites: updatedFavorites }),
        })
          .then((resp) => resp.json())
          .then((data) => {})
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  return (
    <button
      onClick={handleChangeFavoriteState}
      className={hearthIcon ? styles.clicked : styles.notClicked}
    >
      <Heart size={32} weight='fill' />
    </button>
  );
}
