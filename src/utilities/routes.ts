import { lazy } from 'react';

const HomeIcon = lazy(() => import('@heroicons/react/24/outline/HomeIcon'));
const UserIcon = lazy(() => import('@heroicons/react/24/outline/UserIcon'));

const WelcomePage = lazy(() => import('../pages/Welome'));

const CustomersListPage = lazy(() => import('../pages/Customers/CustomersList'));
const CustomersCreatePage = lazy(() => import('../pages/Customers/CustomersForm'));

export type Route = {
  path: string;
  label: string;
  element?: any;
  icon?: any;
  subRoute?: Route[]
};

const routes: Route[] = [
  {
    path: '/',
    element: WelcomePage,
    icon: HomeIcon,
    label: 'Home',
  },
  {
    path: '/customers',
    icon: UserIcon,
    label: 'Customers',
    subRoute: [
      {
        path: '/create',
        element: CustomersCreatePage,
        label: 'Create',
      },
      {
        path: '',
        element: CustomersListPage,
        label: 'List',
      },
    ],
  },
];

export default routes;
