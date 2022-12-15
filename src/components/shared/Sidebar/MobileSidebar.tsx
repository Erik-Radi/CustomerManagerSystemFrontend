import { Transition } from '@headlessui/react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectIsMobileSidebarOpen } from '../../../redux/view-options/viewOptionsSelectors';
import { setisMobileSidebarOpen } from '../../../redux/view-options/viewOptionsSlice';
import Backdrop from '../Backdrop';
import SidebarContent from './SidebarContent';

function MobileSidebar() {
  const isMobileSidebarOpen = useAppSelector(selectIsMobileSidebarOpen);
  const dispatch = useAppDispatch();

  return (
    <Transition show={isMobileSidebarOpen}>
      <Transition.Child
        enter="transition ease-in-out duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in-out duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Backdrop onClick={() => { dispatch(setisMobileSidebarOpen(false)); }} className="md:hidden" />
      </Transition.Child>
      <Transition.Child
        enter="transition ease-in-out duration-150"
        enterFrom="opacity-0 transform -translate-x-20"
        enterTo="opacity-100"
        leave="transition ease-in-out duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 transform -translate-x-20"
      >
        <aside
          className="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
        >
          <SidebarContent
            closeOnClick={() => { dispatch(setisMobileSidebarOpen(false)); }}
          />
        </aside>
      </Transition.Child>
    </Transition>
  );
}

export default MobileSidebar;
