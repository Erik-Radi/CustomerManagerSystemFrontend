import office from '../assets/img/login-office.jpeg';
import officeDark from '../assets/img/login-office-dark.jpeg';

function Login() {
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
              <form>
                <label className="mt-4 block text-sm" htmlFor="username">
                  <span className="text-gray-700 dark:text-gray-400">Username</span>
                  <input
                    id="username"
                    className="block w-full mt-1 text-sm rounded-md border dark:border-gray-600 dark:bg-gray-700 focus:outline-none dark:text-gray-300 px-3 py-2"
                    placeholder="Admin"
                    required
                  />
                </label>
                <label className="mt-4 block text-sm" htmlFor="password">
                  <span className="text-gray-700 dark:text-gray-400">Password</span>
                  <input
                    id="password"
                    className="block w-full mt-1 text-sm rounded-md border dark:border-gray-600 dark:bg-gray-700 focus:outline-none dark:text-gray-300 px-3 py-2"
                    placeholder="***********"
                    type="password"
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
