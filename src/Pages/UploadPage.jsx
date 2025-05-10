import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import StatusBar from '../components/StatusBar';
import { useStudent } from '../context/StudentContext';
import '../css/uploadPage.css';
function UploadPage() {
  const { language } = useStudent();
  return (
    <div className="app">
      <StatusBar />
      <div className="btn-container ">
        <Link to="/results">
          <Button classes="test-btn">
            {language === 'English'
              ? 'Upload your voice file'
              : 'قم برفع ملف الصوت '}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default UploadPage;
