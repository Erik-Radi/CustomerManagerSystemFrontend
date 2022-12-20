import { Transition, Popover } from '@headlessui/react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { setAccessToken } from '../../../redux/access/accessSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setRefresh } from '../../../redux/refresh/refreshSlice';
import { selectIsMobileSidebarOpen } from '../../../redux/view-options/viewOptionsSelectors';
import { toggleIsMobileSidebarOpen } from '../../../redux/view-options/viewOptionsSlice';

function Header() {
  const isMobileSidebarOpen = useAppSelector(selectIsMobileSidebarOpen);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(setAccessToken(null));
    dispatch(setRefresh({
      username: null,
      refreshToken: null,
    }));
  };

  return (
    <header
      className="z-20 py-4 bg-white shadow-md dark:bg-gray-800"
    >
      <div
        className="w-full flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300"
      >
        <button
          type="button"
          onClick={() => { dispatch(toggleIsMobileSidebarOpen()); }}
          className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none"
          aria-label="Menu"
        >
          {
            isMobileSidebarOpen
              ? <XMarkIcon className="w-6 h-6" />
              : <Bars3Icon className="w-6 h-6" />
          }
          {/* <Transition
            show={!isMobileSidebarOpen}
            enter="transition-transform ease-out duration-100"
            enterFrom="scale-0"
            enterTo="scale-100"
            leave="transition-transform ease-in duration-100"
            leaveFrom="scale-100"
            leaveTo="scale-0"
          >
            <Bars3Icon className="w-6 h-6" />
          </Transition>
          <Transition
            show={isMobileSidebarOpen}
            enter="transition-transform ease-out duration-100"
            enterFrom="scale-0"
            enterTo="scale-100"
            leave="transition-transform ease-in duration-100"
            leaveFrom="scale-100"
            leaveTo="scale-0"
          >
            <XMarkIcon className="w-6 h-6" />
          </Transition> */}
        </button>
        <div className="flex justify-center flex-1 lg:mr-32" />
        <ul
          className="flex items-center flex-shrink-0 space-x-6"
        >
          <li className="relative">
            <Popover>
              <Popover.Button
                className="w-8 h-8 rounded-full align-middle focus:outline-none"
              >
                <img src="https://via.placeholder.com/200x133" className="object-cover w-8 h-8 rounded-full" alt="profile" />
              </Popover.Button>
              <Transition
                enter="transition ease-in duration-150"
                enterFrom="opacity-25"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Panel>
                  <ul
                    className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                  >
                    <li className="flex ">
                      <button
                        type="button"
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 cursor-pointer"
                        onClick={() => { logout(); }}
                      >
                        <ArrowRightOnRectangleIcon className="w-4 h-4 mr-3" />
                        <span>
                          Log out
                        </span>
                      </button>
                    </li>
                  </ul>
                </Popover.Panel>
              </Transition>
            </Popover>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
