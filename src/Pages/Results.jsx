import { Link } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import { useStudent } from '../context/StudentContext';
import '../css/results.css';
function Results() {
  const { language } = useStudent();
  return (
    <div className="app">
      <StatusBar />
      <div className="results">
        <div className="results-strength">
          <h3 className="results-title">
            {language === 'English' ? 'Strength Points' : 'نقاط القوة'}
          </h3>
          <ul className="strength-points">
            <li>{language === 'English' ? 'Pronounciation' : 'النطق'}</li>
            <li>{language === 'English' ? 'Vowels' : 'حروف العلة'}</li>
            <li>{language === 'English' ? 'Pronounciation' : 'النطق'}</li>
          </ul>
        </div>
        <div className="results-weakness">
          <h3 className="results-title">
            {language === 'English' ? 'Weakness Points' : 'نقاط الضعف'}
          </h3>
          <ul className="strength-points">
            <li>
              {language === 'English'
                ? 'Letters (ض) & (ك)'
                : 'حروف الضاد و الكاف'}
            </li>
            <li>{language === 'English' ? 'Speed of talk' : 'سرعة الكلام'}</li>
          </ul>
        </div>

        <div className="score">
          {language === 'English' ? ' Score :' : 'النتيجة :'}
          80% {language === 'English' ? ' Passed' : 'ناجح'}
        </div>
        <div className="back-to-lesson">
          <Link to="/learning">Continue Learing</Link>
        </div>
      </div>
    </div>
  );
}

export default Results;
