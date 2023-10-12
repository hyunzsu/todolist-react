import { Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage/TodoPage';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<TodoPage/>} />
        <Route path='signin' element={<SignIn/>} />
        <Route path='signup' element={<SignUp/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;