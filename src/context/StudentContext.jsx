import { createContext, useContext, useState } from 'react';

const StudentContext = createContext();
function StudentProvider({ children }) {
  const [language, setLanguage] = useState('English');
  const [isStudent, setIsStudent] = useState(false);
  return (
    <StudentContext.Provider
      value={{ language, setLanguage, isStudent, setIsStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
}

function useStudent() {
  const context = useContext(StudentContext);
  if (context === undefined)
    throw new Error('StudentContext was used outside of the StudentProvider');
  return context;
}

export { StudentProvider, useStudent };
