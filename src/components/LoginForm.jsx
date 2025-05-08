import { useStudent } from '../context/StudentContext';
import Button from './Button';
import '../css/LoginForm.css';

function LoginForm() {
  const { language } = useStudent();
  return (
    <form className="login-form">
      <label htmlFor="email">
        {language === 'English' ? 'Student Email' : 'البريد الإلكتروني'}
      </label>
      <input type="email" placeholder="myname@gmail.com" id="email" />
      <label>{language === 'English' ? 'Password' : 'كلمة السر'}</label>
      <input type="password" placeholder="*********" />

      <Button>{language === 'English' ? 'Login' : 'تسجيل الدخول'}</Button>
      <Button> {language === 'English' ? 'New Student' : 'طالب جديد'}</Button>
    </form>
  );
}

export default LoginForm;
