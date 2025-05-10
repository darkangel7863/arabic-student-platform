import Button from '../components/Button';
import Form from '../components/Form';
import { useStudent } from '../context/StudentContext';
import '../css/uploadPage.css';
function UploadPage() {
  const { language } = useStudent();
  return (
    <div className="app">
      <div className="btn-container ">
        <Button>
          {language === 'English'
            ? 'Upload your voice file'
            : 'قم برفع ملف الصوت '}
        </Button>
      </div>
    </div>
  );
}

export default UploadPage;
