import { useStudent } from '../context/StudentContext';
import Button from './Button';
import '../css/LoginForm.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Message from './Message';
function LoginForm() {
  const { language } = useStudent();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function handleLogin(e) {
    e.preventDefault();
    const userEmail = JSON.parse(localStorage.getItem('email'));
    const userPassword = JSON.parse(localStorage.getItem('password'));
    if (!email || !password) {
      setError(
        `${
          language === 'English'
            ? 'Please complete all fields to continue'
            : 'برجاء إكمال كل البيانات المطلوبة للمتابعة'
        }`
      );
      return;
    }
    console.log(email.type, email);
    console.log(password.type, password);
    console.log(userEmail.type, userEmail);
    console.log(userPassword.type, userPassword);

    if (
      email.toString() !== userEmail.toString() ||
      password.toString() !== userPassword.toString()
    ) {
      setError(
        `${
          language === 'English'
            ? 'Email or Password are not matching. Please try again.'
            : 'البريد الالكتروني أو كلمة المرور لا يتطابقان . من فضلك حاول ثانية.'
        }`
      );
      return;
    }
    setError('');
  }
  return (
    <>
      <Message message={error} />

      <form className="login-form">
        <label htmlFor="email">
          {language === 'English' ? 'Student Email' : 'البريد الإلكتروني'}
        </label>
        <input
          type="email"
          placeholder="myname@gmail.com"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">
          {language === 'English' ? 'Password' : 'كلمة السر'}
        </label>
        <input
          type="password"
          placeholder="*********"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button onClick={handleLogin}>
          {language === 'English' ? 'Login' : 'تسجيل الدخول'}
        </Button>
        <div>
          <Link to="/register" className="link">
            {language === 'English' ? 'New Student' : 'طالب جديد'}
          </Link>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
