import { Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage/TodoPage';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<TodoPage/>} />
        <Route path='login' element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;