import { useState } from 'react';
import { Eye, EyeSlash } from 'phosphor-react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Login.module.css';

export default function Login() {
  const [password, setPassword] = useState(false);

  function showPassword() {
    setPassword(!password);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Bem-vindo de volta!</h1>
        <p>Faça login e comece a aproveitar nossas promoções!</p>
        <input type='text' name='user' placeholder='Digite seu usuário' />
        <div>
          <input
            type={password ? 'text' : 'password'}
            name='password'
            placeholder='Digite sua senha'
          />
          <button
            type='button'
            onClick={showPassword}
            className={styles.showPassword}
          >
            {password ? (
              <EyeSlash size={16} color='#c0c0c0' />
            ) : (
              <Eye size={16} color='#c0c0c0' />
            )}
          </button>
        </div>

        <Link href='/' legacyBehavior>
          <a>Esqueci minha senha.</a>
        </Link>

        <input type='submit' value='Entrar' />
      </form>

      <h4>Faça login com:</h4>

      <div className={styles.redeLogin}>
        <span>
          <Image src='/images/google.png' width={20} height={20} alt='' />
          Google
        </span>

        <span>
          <Image src='/images/facebook.png' width={20} height={20} alt='' />
          Facebook
        </span>
      </div>
    </div>
  );
}
