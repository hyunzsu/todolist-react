import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { DarkModeProvider } from '../../context/DarkModeContext';
import Title from '../../components/Title/Title';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-conifg';

export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 로그인
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      console.log('로그인 성공');
    } catch (error) {
      console.log('로그인 실패');
    }
  };

  return (
    <DarkModeProvider>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Title
          type={2}
          className={`${styles.title} ${styles.h2}`}
          label='Login'
        />
        <input
          className={`${styles.input} ${styles.email}`}
          type='text'
          placeholder='Email'
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          className={`${styles.input} ${styles.password}`}
          type='password'
          placeholder='Password'
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        <button className={styles.button} onClick={login}>
          Login
        </button>
      </form>
    </DarkModeProvider>
  );
}
