import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from './Account.module.css';
import Login from '../../components/Layout/Account/Login';
import Register from '../../components/Layout/Account/Register';
import Message from '@/components/Layout/Message';

export default function Account() {
  const router = useRouter();
  const message = router.query.message as string;
  const [auth, setAuth] = useState(true);

  function handleChangeAuth() {
    setAuth(!auth);
  }
  return (
    <main className={styles.container}>
      <div className={styles.containerImages}>
        <h1>E-Commerce</h1>
        <p>Aqui vai todo conteudo de CTA e Apresentação.</p>
        <div className={styles.images}></div>
      </div>
      <div className={styles.auth}>
        <div className={styles.selectLogin}>
          <button
            onClick={handleChangeAuth}
            className={auth ? styles.btnLogin : styles.none}
          >
            {auth ? 'Cadastrar' : 'Logar'}
          </button>

          <p> {auth ? 'Logar' : 'Cadastrar'}</p>
        </div>
        {message && <Message text={message} type='success' />}
        {auth ? <Login /> : <Register />}
      </div>
    </main>
  );
}
