import { useStudent } from '../context/StudentContext';
import '../css/statusBar.css';
function StatusBar() {
  const fullName = JSON.parse(localStorage.getItem('fullName'));
  const dob = JSON.parse(localStorage.getItem('dob'));
  const level = JSON.parse(localStorage.getItem('level'));

  const { language } = useStudent();
  // console.log(fullName)
  return (
    <div className="statusBar">
      <span>
        {language === 'English' ? 'Student Name :' : 'اسم الطالب :'} {fullName}
      </span>
      <span>
        {language === 'English' ? 'Date of birth :' : 'تاريخ الميلاد : '} {dob}
      </span>
      <span>
        {language === 'English' ? 'Level :' : 'المستوي : '} {level}
      </span>
    </div>
  );
}
export default StatusBar;
