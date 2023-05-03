import { useState } from 'react';
import { Eye, EyeSlash } from 'phosphor-react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Register.module.css';

export default function Login() {
  const [password, setPassword] = useState(false);

  function showPassword() {
    setPassword(!password);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Cadastre-se!</h1>
        <p>Cadastre-se para fazer parte da nossa comunidade.</p>
        <input type='text' name='user' placeholder='Digite seu usuário' />
        <input type='text' name='user' placeholder='Digite seu nome' />
        <input type='email' name='user' placeholder='Digite seu Email' />
        <input type='email' name='user' placeholder='Confirme seu Email' />
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
        <input
          type={password ? 'text' : 'password'}
          name='password'
          placeholder='Digite sua senha'
        />

        <input type='submit' value='Cadastrar' />
      </form>

      <h4>Cadastre-se com:</h4>

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
