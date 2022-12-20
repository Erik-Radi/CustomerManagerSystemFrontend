import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './index.css';
import { persistor, store } from './redux/store';
import Fallback from './components/shared/Fallback';
import setupInterceptor from './utilities/axios/setupInterceptor';

const LoginPage = lazy(() => import('./pages/Login'));

setupInterceptor();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Suspense fallback={<Fallback />}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/*" element={<App />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
);
