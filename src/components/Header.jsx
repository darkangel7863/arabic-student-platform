import { useStudent } from '../context/StudentContext';
import '../css/header.css';
import Button from './Button';
function Header() {
  const { language, setLanguage } = useStudent();
  return (
    <header className="header">
      <div className="title">
        <h1>
          {language === 'English'
            ? 'Arabic Student Platform'
            : 'منصة طالب اللغة العربية'}
        </h1>
      </div>
      <div className="LanguageBtn">
        <Button
          onClick={() =>
            setLanguage(language === 'English' ? 'Arabic' : 'English')
          }
          classes="btn-lang"
        >
          {language === 'English' ? 'عربي' : 'English'}
        </Button>
        {/* <button className="btn btn-lang"></button> */}
      </div>
    </header>
  );
}
export default Header;
