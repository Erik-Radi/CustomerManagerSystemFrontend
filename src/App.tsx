import { lazy, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Welcome = lazy(() => import('./pages/Welome'));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      {
        isLoggedIn
          ? <Route path="/" element={<Welcome />} />
          : <Route path="*" element={<Navigate to="/login" replace />} />
      }
    </Routes>
  );
}

export default App;
