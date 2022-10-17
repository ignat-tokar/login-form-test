import './App.css';
import Start from './components/Start';
import Login from './components/Login';
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const login = 'user';
	const password = '12345';
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login-form-test/' element={<Start login={login} />} />
        <Route path='login-form-test/login' element={<Login login={login} password={password} />} />
        <Route path='login-form-test/welcome' element={<Welcome login={login} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
