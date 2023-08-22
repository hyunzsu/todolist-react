import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);
  const handleAdd = (todo) => {
    // 새로운 투두를 todos에 업데이트 해야 함
    console.log(todo);
    setTodos([...todos, todo])
  }
  
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}/> 
    </section>
  );
}

// todo가 추가되면 알려주라는 콜백함수를 props로 전달, onAdd가 되면 나의 콜백함수(handleAdd)를 호출해