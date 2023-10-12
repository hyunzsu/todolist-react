import { createContext, useContext, useState } from 'react';

// AuthContext 생성, 초기상태 정의
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
}
