import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed']; // 전체 필터
function App() {
  const [filter, setFilter] = useState(filters[0]); // 현재 선택된 필터

  return (
    <DarkModeProvider>
      <Header
        filters={filters} // 전체 필터
        filter={filter} // 현재 선택된 필터('all')
        onFilterChange={(filter) => setFilter(filter)} // 필터 변경될때
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
