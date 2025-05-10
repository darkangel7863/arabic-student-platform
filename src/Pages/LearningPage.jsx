import { Link } from 'react-router-dom';
import Button from '../components/Button';
import StatusBar from '../components/StatusBar';
import { useStudent } from '../context/StudentContext';
import '../css/learningPage.css';
function LearningPage() {
  const { language } = useStudent();
  return (
    <div className="learning-app">
      <StatusBar />
      <div className="LearningRow">
        <div className="lesson">&nbsp;</div>
        <div className="sideBar">
          <h3 className="lesson-title">
            {language === 'English' ? 'Words categories' : 'أقسام الكلام'}
          </h3>
          <div className="lesson-btns">
            <Button>
              {language === 'English'
                ? 'Lesson 1 : Words categories'
                : 'الدرس الأول : أقسام الكلام'}
            </Button>
            <Button>
              {language === 'English'
                ? 'Lesson 2 : Verbs types'
                : 'الدرس الثاني : أنواع الأفعال'}
            </Button>
            <Button>
              {language === 'English'
                ? 'Lesson 3 : Nouns types'
                : 'الدرس الثالث : أنواع الأسماء'}
            </Button>
            <Link to="/upload">
              <Button classes="test-btn">
                {language === 'English'
                  ? 'Test your knowledge'
                  : 'اختبر ما تعلمت'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningPage;
