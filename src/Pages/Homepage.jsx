import { Outlet } from 'react-router-dom';
import Form from '../components/Form';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function Homepage() {
  return (
    <div className="app">
      <Form>
        <Outlet />
      </Form>
    </div>
  );
}

export default Homepage;
