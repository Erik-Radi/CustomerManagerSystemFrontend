import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarDropDownProps } from '../../../types/Sidebar/SidebarDropDownProps';

function SidebarDropDown({ route, closeOnClick }: SidebarDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
        onClick={() => { setIsOpen(!isOpen); }}
      >
        <span className="inline-flex items-center ">
          <route.icon className="w-5 h-5" />
          <span className="ml-4">{route.label}</span>
        </span>
        <ChevronDownIcon className={`h-4 w-4 ${isOpen ? 'hidden' : 'block'}`} />
        <ChevronUpIcon className={`h-4 w-4 ${!isOpen ? 'hidden' : 'block'}`} />
      </button>
      <Transition
        show={isOpen}
        enter="transition-all ease-in-out duration-300"
        enterFrom="opacity-25"
        enterTo="opacity-100"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul
          className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
        >
          {
            route.subRoute?.map((sRoute) => (
              <li
                key={sRoute.label + route.path + sRoute.path}
                className=" px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer"
              >
                <Link to={route.path + sRoute.path} onClick={() => { closeOnClick?.(); }} className="w-full block">{sRoute.label}</Link>
              </li>
            ))
          }
        </ul>
      </Transition>
    </>
  );
}

export default SidebarDropDown;
