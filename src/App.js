import { Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage/TodoPage';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<TodoPage/>} />
        <Route path='login' element={<SignIn/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;