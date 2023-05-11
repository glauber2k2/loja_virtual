import { useState, useEffect } from 'react';

import FavoriteCard from '../../components/FavoriteCard';

import styles from './Favorites.module.css';

interface Favorite {
  id: number;
}
export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setFavorites(data.favorites);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.FavoriteListen}>
      <h1>Seus Favoritos:</h1>
      {favorites.map((item: Favorite) => (
        <FavoriteCard key={item.id} id={item.id} />
      ))}
    </div>
  );
}
