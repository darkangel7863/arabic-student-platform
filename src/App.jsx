import './css/app.css';
import Header from './components/Header';
import { StudentProvider } from './context/StudentContext';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import PageNotFound from './Pages/PageNotFound';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

export default function App() {
  return (
    <BrowserRouter>
      <StudentProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<Navigate replace to="/login" />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </StudentProvider>
    </BrowserRouter>
  );
}
