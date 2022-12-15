import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../../utilities/routes';
import Fallback from './Fallback';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="h-full py-2 pb-16 overlow-y-auto">
          <div className="container px-4 m-auto grid text-gray-700 dark:text-gray-200">
            <Suspense fallback={<Fallback />}>
              <Routes>
                {
                routes.map((route) => (
                  route.element
                    ? (
                      <Route
                        key={route.label + route.path}
                        path={route.path}
                        element={<route.element />}
                      />
                    )
                    : (
                      route.subRoute!.map((sRoute) => (
                        <Route
                          key={sRoute.label + route.path + sRoute.path}
                          path={route.path + sRoute.path}
                          element={<sRoute.element />}
                        />
                      ))
                    )
                ))
              }
              </Routes>
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
