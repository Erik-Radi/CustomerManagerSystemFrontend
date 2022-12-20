import { Link } from 'react-router-dom';
import SidebarDropDown from './SidebarDropdown';
import { SidebarContentProp } from '../../../types/Sidebar/SidebarContentProps';
import routes from '../../../utilities/routes';

function SidebarContent({ closeOnClick }: SidebarContentProp) {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <Link to="/" onClick={() => { closeOnClick?.(); }} className="block mx-auto w-fit text-lg font-bold text-gray-800 dark:text-gray-200 cursor-pointer ">
        Customer Manager
      </Link>
      <ul className="mt-6">
        {
          routes.map((route) => (
            <li key={route.label + route.path} className="relative px-6 py-3">
              {
                route.element
                  ? (
                    <Link to={route.path} onClick={() => { closeOnClick?.(); }} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                      <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-r-lg" />
                      <route.icon className="w-5 h-5" />
                      <span className="ml-4 pt-1">{route.label}</span>
                    </Link>
                  ) : (
                    <SidebarDropDown
                      closeOnClick={closeOnClick}
                      route={route}
                    />
                  )
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default SidebarContent;
