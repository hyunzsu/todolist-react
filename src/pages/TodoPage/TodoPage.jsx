import styles from './TodoPage.module.css'
import React, { useState } from 'react';
import { DarkModeProvider } from '../../context/DarkModeContext';
import Header from '../../components/Header/Header';
import TodoList from '../../components/TodoList/TodoList';

const filters = ['all', 'active', 'completed']; // 전체 필터
export default function TodoPage() {
  const [filter, setFilter] = useState(filters[0]); // 현재 선택된 필터

  return (
      <DarkModeProvider>
        <div className={styles.container}>
          <Header
            filters={filters} // 전체 필터
            filter={filter} // 현재 선택된 필터('all')
            onFilterChange={(filter) => setFilter(filter)} // 필터 변경될때
          />
          <TodoList filter={filter}/>
        </div>
      </DarkModeProvider>
  );
}
