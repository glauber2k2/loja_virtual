import { useState } from 'react';

import styles from './Account.module.css';
import Login from '../../components/Layout/Account/Login';
import Register from '../../components/Layout/Account/Register';

export default function Account() {
  const [auth, setAuth] = useState(true);

  function handleChangeAuth() {
    setAuth(!auth);
  }
  return (
    <main className={styles.container}>
      <div className={styles.containerImages}>
        <h1>E-Commerce</h1>
        <div className={styles.images}></div>
      </div>
      <div>
        <div className={auth ? styles.selectLogin : styles.selectRegister}>
          <button onClick={handleChangeAuth}>
            {auth ? 'Cadastrar' : 'Logar'}
          </button>{' '}
        </div>
        {auth ? <Login /> : <Register />}
      </div>
    </main>
  );
}
