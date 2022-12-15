import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectUsername } from './redux/refresh/refreshSelectors';
import { useAppSelector } from './redux/hooks';

const Layout = lazy(() => import ('./components/shared/Layout'));

function App() {
  const username = useAppSelector(selectUsername);

  return (
    <Routes>
      {
        username
          ? <Route path="/*" element={<Layout />} />
          : <Route path="*" element={<Navigate to="/login" replace />} />
      }
    </Routes>
  );
}

export default App;

// local-session storage,
