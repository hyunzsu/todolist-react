import React from 'react';
import styles from './LoginForm.module.css';
import { DarkModeProvider } from '../../context/DarkModeContext';
import Title from '../../components/Title/Title';

export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <DarkModeProvider>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Title
          type={2}
          className={`${styles.title} ${styles.h2}`}
          label='Login'
        />
        <input className={`${styles.input} ${styles.email}`} type='text' placeholder='Email' />
        <input className={`${styles.input} ${styles.password}`}  type='text' placeholder='Password' />
        <button className={styles.button}>Login</button>
      </form>
    </DarkModeProvider>
  );
}
