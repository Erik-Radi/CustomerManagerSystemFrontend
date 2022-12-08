import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectUsername } from './redux/access/accessSelectors';
import { useAppSelector } from './redux/hooks';

const Welcome = lazy(() => import('./pages/Welome'));

function App() {
  const username = useAppSelector(selectUsername);

  return (
    <Routes>
      {
        username
          ? <Route path="/" element={<Welcome />} />
          : <Route path="*" element={<Navigate to="/login" replace />} />
      }
    </Routes>
  );
}

export default App;

// local-session storage,
