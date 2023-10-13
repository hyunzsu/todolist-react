import { createContext, useContext, useState } from 'react';

// AuthContext 생성, 초기상태 정의
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 이메일, 비밀번호
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 오류메시지 상태저장
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  // 유효성 검사
  const [isEmail, setIsEmail] = useState('');
  const [isPassword, setIsPassword] = useState('');

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        emailMessage,
        setEmailMessage,
        passwordMessage,
        setPasswordMessage,
        isEmail,
        setIsEmail,
        isPassword,
        setIsPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// hook으로 만들어 줌, 다른 곳에서 사용할 수 있게
export const useAuth = () => useContext(AuthContext);
