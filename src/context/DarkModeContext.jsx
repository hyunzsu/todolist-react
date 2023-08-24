import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
// hook으로 만들어 줌
export const useDarkMode = () => useContext(DarkModeContext);

// 자식컴포넌트를 받아오는 컴포넌트를 만들어서 자식컴포넌트들을 Provider로 감싸면 되고, 자식컴포넌트와 공유하고싶은 데이터가 있다면 value에 지정해주면 됨
