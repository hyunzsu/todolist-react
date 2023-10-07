import React from 'react'
import { DarkModeProvider } from '../../context/DarkModeContext';
import styles from './Register.module.css';
import Title from '../../components/Title/Title';

export default function Register() {
  return (
    <DarkModeProvider>
      <form className={styles.container}>
        <Title
          type={2}
          className={`${styles.title} ${styles.h2}`}
          label={'Register'}
        />
        <input
          className={`${styles.input} ${styles.email}`}
          type='text'
          placeholder='Email'
        />
        <input
          className={`${styles.input} ${styles.password}`}
          type='password'
          placeholder='Password'
        />
        <button className={styles.button}>
          Register
        </button>
      </form>
    </DarkModeProvider>
  );
}