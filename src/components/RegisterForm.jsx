import { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import '../css/registerForm.css';
import Button from './Button';
import Message from './Message';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [level, setLevel] = useState('');
  const [error, setError] = useState('');
  const { language } = useStudent();

  function handleAdd(e) {
    e.preventDefault();
    console.log(fullName, password, phone, email, confirmPassword, dob, level);
    if (
      !fullName ||
      !phone ||
      !email ||
      !dob ||
      !password ||
      !confirmPassword ||
      !level
    ) {
      setError(
        `${
          language === 'English'
            ? 'Please complete all fields to continue'
            : 'برجاء إكمال كل البيانات المطلوبة للمتابعة'
        }`
      );
      return;
    }
    if (password !== confirmPassword) {
      setError(
        `${
          language === 'English'
            ? 'Passwords not matching'
            : 'كلمة السر و تأكيدها لا يتطابقان'
        }`
      );
      return;
    }
    // const newStudent = { fullName, phone, email, dob, password, level };
    localStorage.setItem('fullName', JSON.stringify([fullName]));
    localStorage.setItem('phone', JSON.stringify([phone]));
    localStorage.setItem('email', JSON.stringify([email]));
    localStorage.setItem('dob', JSON.stringify([dob]));
    localStorage.setItem('password', JSON.stringify([password]));
    localStorage.setItem('level', JSON.stringify([level]));
    setError('');
  }
  return (
    <>
      <Message message={error} />
      <form className="register-form">
        <div className="row">
          <div className="input-field">
            <label htmlFor="fullName">
              {language === 'English' ? 'Student Name' : 'اسم الطالب'}
            </label>
            <input
              type="text"
              placeholder="John Doe"
              id="fullName"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="phone">
              {language === 'English' ? 'Phone Num.' : 'رقم الهاتف'}
            </label>
            <input
              type="number"
              placeholder="00212345678"
              id="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
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
          </div>
          <div className="input-field">
            <label htmlFor="DOB">
              {language === 'English' ? 'Birthdate' : 'تاريخ الميلاد'}
            </label>
            <input
              type="date"
              placeholder="01/01/2000"
              id="DOB"
              value={dob}
              onChange={e => setDob(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
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
          </div>
          <div className="input-field">
            <label htmlFor="confirmPassword">
              {language === 'English' ? 'Confirm Password' : 'أكد كلمة السر'}
            </label>
            <input
              type="password"
              placeholder="*********"
              id="confirmPassword"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <label htmlFor="level">
              {language === 'English' ? 'Your level' : 'المستوي الخاص بك'}
            </label>
            <select
              id="level"
              value={level}
              onChange={e => setLevel(e.target.value)}
            >
              <option>---</option>
              <option value={'B1'}>B1</option>
              <option value={'B2'}>B2</option>
            </select>
          </div>
        </div>
        <div className="btns">
          <Button onClick={handleAdd}>
            {language === 'English' ? 'Register new student' : 'تسجيل الطالب'}
          </Button>

          <Link to="/login" className="link">
            {language === 'English'
              ? 'Already a student? Login'
              : 'طالب مسجل بالفعل ؟ قم بتسجيل الدخول'}
          </Link>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
