import '../css/app.css';
import Header from './Header';
import { StudentProvider } from '../context/StudentContext';
import Form from './Form';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function App() {
  return (
    <StudentProvider>
      <div className="app">
        <Header />
        <Form>
          {/* <LoginForm /> */}
          <RegisterForm />
        </Form>
      </div>
    </StudentProvider>
  );
}
