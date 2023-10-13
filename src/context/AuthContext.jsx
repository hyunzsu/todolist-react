import { createContext, useContext, useState } from 'react';

// AuthContext 생성, 초기상태 정의
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
}

// hook으로 만들어 줌, 다른 곳에서 사용할 수 있게
export const useAuth = () => useContext(AuthContext);