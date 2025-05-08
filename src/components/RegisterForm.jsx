import { useStudent } from '../context/StudentContext';
import '../css/registerForm.css';
import Button from './Button';
function RegisterForm() {
  const { language } = useStudent();
  return (
    <form className="register-form">
      <div className="row">
        <div className="input-field">
          <label htmlFor="fullName">
            {language === 'English' ? 'Student Name' : 'اسم الطالب'}
          </label>
          <input type="text" placeholder="John Doe" id="fullName" />
        </div>
        <div className="input-field">
          <label htmlFor="phone">
            {language === 'English' ? 'Phone Num.' : 'رقم الهاتف'}
          </label>
          <input type="number" placeholder="00212345678" id="phone" />
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <label htmlFor="email">
            {language === 'English' ? 'Student Email' : 'البريد الإلكتروني'}
          </label>
          <input type="email" placeholder="myname@gmail.com" id="email" />
        </div>
        <div className="input-field">
          <label htmlFor="DOB">
            {language === 'English' ? 'Birthdate' : 'تاريخ الميلاد'}
          </label>
          <input type="date" placeholder="01/01/2000" id="DOB" />
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <label htmlFor="password">
            {language === 'English' ? 'Password' : 'كلمة السر'}
          </label>
          <input type="password" placeholder="*********" id="password" />
        </div>
        <div className="input-field">
          <label htmlFor="confirmPassword">
            {language === 'English' ? 'Confirm Password' : 'أكد كلمة السر'}
          </label>
          <input type="password" placeholder="*********" id="confirmPassword" />
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <label htmlFor="level">
            {language === 'English' ? 'Your level' : 'المستوي الخاص بك'}
          </label>
          <select id="level">
            <option value={'B1'}>B1</option>
            <option value={'B2'}>B2</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <Button>
            {language === 'English' ? 'Register new student' : 'تسجيل الطالب'}
          </Button>
        </div>
        <div className="row">
          <Button>
            {language === 'English'
              ? 'Already registered! Login'
              : 'مسجل بالفعل ! تسجيل دخول'}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
