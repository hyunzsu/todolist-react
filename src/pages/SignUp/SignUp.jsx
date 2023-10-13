import React from 'react';
import { DarkModeProvider } from '../../context/DarkModeContext';
import styles from './SignUp.module.css';
import Title from '../../components/Title/Title';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-conifg';
import { useAuth } from '../../context/AuthContext';

export default function SignUp() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailMessage,
    setEmailMessage,
    passwordMessage,
    setPasswordMessage,
    setIsEmail,
    setIsPassword,
  } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 이메일
  const onChangeEmail = (e) => {
    const emailRegex = /.*@.+/; // 이메일은 '@' 기호를 포함해야 합니다.
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 올바르지 않습니다.')
      setIsEmail(false)
    } else {
      setEmailMessage('')
      setIsEmail(true)
    }
  }

  // 비밀번호
  const onChangePassword = (e) => {
    const passwordRegex = /^.{8,}$/; // 비밀번호는 8자리 이상이어야 합니다.
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('비밀번호는 8자리 이상이어야 합니다.')
      setIsPassword(false)
    } else {
      setPasswordMessage('')
      setIsPassword(true)
    }
  }
 
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
          type='email'
          placeholder='Email'
          onChange={onChangeEmail}
        />
        {email.length > 0 && <span className={styles.error}>{emailMessage}</span>}
        <input
          className={`${styles.input} ${styles.password}`}
          type='password'
          placeholder='Password'
          onChange={onChangePassword}
        />
        {password.length > 0 && <span className={styles.error}>{passwordMessage}</span>}
        <button className={styles.button} onClick={signUp}>
          Register
        </button>
      </form>
    </DarkModeProvider>
  );
}
