import { useState } from 'react';
import { useRouter } from 'next/router';
import { Eye, EyeSlash } from 'phosphor-react';
import Image from 'next/image';

import styles from './Register.module.css';
import Message from '../../Message';

interface userProps {
  user: string;
  name: string;
  email: string;
  authEmail: string;
  password: string;
  authPassword: string;
}

export default function Register() {
  const router = useRouter();
  const [message, setMessage] = useState('');

  const [password, setPassword] = useState(false);
  const [user, setUser] = useState<userProps>({
    user: '',
    name: '',
    email: '',
    password: '',
    authEmail: '',
    authPassword: '',
  });

  function showPassword() {
    setPassword(!password);
  }

  function postUser(event: React.FormEvent<HTMLFormElement>, user: userProps) {
    event.preventDefault();
    if (
      user.user == '' ||
      user.name == '' ||
      user.email == '' ||
      user.authEmail == '' ||
      user.password == '' ||
      user.authPassword == ''
    ) {
      setMessage('Todos os campos precisam ser preenchidos');
    } else if (user.email !== user.authEmail) {
      setMessage('Verifique a confirmação do email.');
    } else if (user.password !== user.authPassword) {
      setMessage('Verifique a confirmação da senha.');
    } else if (user.password.length < 6) {
      setMessage('Senha não pode ser menor que 6 dígitos');
    } else {
      fetch(`http://localhost:5000/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: user.name,
          password: user.password,
          email: user.email,
          userName: user.user,
          favorites: [],
          shoppingCart: [],
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
      router.push({
        pathname: '/Account',
        query: {
          message: `Conta cadastrada com sucesso!`,
        },
      });
      const timer = setTimeout(() => {
        router.reload();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(user);
    setMessage('');
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div className={styles.container}>
      {message && <Message text={message} type='failed' />}
      <form className={styles.form} onSubmit={(event) => postUser(event, user)}>
        <h1>Cadastre-se!</h1>
        <p>Cadastre-se para fazer parte da nossa comunidade.</p>
        <input
          type='text'
          name='user'
          placeholder='Digite seu usuário'
          onChange={handleChange}
          autoComplete='off'
        />
        <input
          type='text'
          name='name'
          placeholder='Digite seu nome'
          onChange={handleChange}
          autoComplete='off'
        />
        <input
          type='email'
          name='email'
          placeholder='Digite seu Email'
          onChange={handleChange}
          autoComplete='off'
        />
        <input
          type='email'
          name='authEmail'
          placeholder='Confirme seu Email'
          onChange={handleChange}
          autoComplete='off'
        />
        <div>
          <input
            type={password ? 'text' : 'password'}
            name='password'
            placeholder='Digite sua senha'
            onChange={handleChange}
            autoComplete='off'
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
          name='authPassword'
          placeholder='Digite sua senha'
          onChange={handleChange}
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
