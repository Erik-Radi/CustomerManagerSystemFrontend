import {
  ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import office from '../assets/img/login-office.jpeg';
import officeDark from '../assets/img/login-office-dark.jpeg';
import { LoginRequest } from '../types/Login/LoginRequest';
import api from '../utilities/axios/api';
import { AccessState } from '../types/redux/AccessState';
import { useAppDispatch } from '../redux/hooks';
import { setAccess } from '../redux/access/accessSlice';
import { setRefreshToken } from '../redux/refresh/refreshSlice';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loginValues, setLoginValues] = useState<LoginRequest>({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const loginInputChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    if (errorMessage !== '') {
      setErrorMessage('');
    }
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  const loginFormSubmitHandler: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    api.post('/auth/login', { ...loginValues })
      .then((res) => {
        const LoggedInUser: AccessState = {
          username: res.data.username,
          accessToken: res.headers.authorization || null,
        };

        dispatch(setAccess(LoggedInUser));
        dispatch(setRefreshToken(res.data.refreshToken));
        navigate('/');
      })
      .catch((err) => {
        setErrorMessage(err.response.data.msg);
      });
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              className="object-cover w-full h-full dark:hidden"
              src={office}
              alt="office"
            />
            <img
              className="hidden object-cover w-full h-full dark:block"
              src={officeDark}
              alt="office"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
            <div className="w-full">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 ">Login</h1>
              {
                errorMessage !== ''
                  ? <span className="text-xs text-red-600 dark:text-red-400">{errorMessage}</span>
                  : null
              }
              <form onSubmit={loginFormSubmitHandler}>
                <label className="mt-4 block text-sm" htmlFor="username">
                  <span className="text-gray-700 dark:text-gray-400">Username</span>
                  <input
                    id="username"
                    name="username"
                    value={loginValues.username}
                    className="block w-full mt-1 text-sm rounded-md border dark:border-gray-600 dark:bg-gray-700 focus:outline-none dark:text-gray-300 px-3 py-2"
                    placeholder="Admin"
                    onChange={loginInputChangeHandler}
                    required
                  />
                </label>
                <label className="mt-4 block text-sm" htmlFor="password">
                  <span className="text-gray-700 dark:text-gray-400">Password</span>
                  <input
                    id="password"
                    name="password"
                    value={loginValues.password}
                    className="block w-full mt-1 text-sm rounded-md border dark:border-gray-600 dark:bg-gray-700 focus:outline-none dark:text-gray-300 px-3 py-2"
                    placeholder="***********"
                    type="password"
                    onChange={loginInputChangeHandler}
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
