import React from 'react';
import { DarkModeProvider } from '../../context/DarkModeContext';
import styles from './SignUp.module.css';
import Title from '../../components/Title/Title';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-conifg';
import { useAuth } from '../../context/AuthContext';

export default function SignUp() {
  const { email, setEmail, password, setPassword } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 회원가입
  const signUp = async () => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('회원가입 성공!', createdUser);
    } catch (error) {
      console.log('회원가입 실패!');
    }
  };

  return (
    <DarkModeProvider>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Title
          type={2}
          className={`${styles.title} ${styles.h2}`}
          label='Register'
        />
        <input
          className={`${styles.input} ${styles.email}`}
          type='text'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={`${styles.input} ${styles.password}`}
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={signUp}>
          Register
        </button>
      </form>
    </DarkModeProvider>
  );
}
