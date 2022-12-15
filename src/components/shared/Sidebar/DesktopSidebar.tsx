import SidebarContent from './SidebarContent';

function DesktopSidebar() {
  return (
    <aside className=" z-30 flex-shrink-0 hidden w-60 overflow-y-auto md:block bg-gray-100 dark:bg-gray-800 shadpw-md shadow-gray-100 dark:shadow-gray700 ">
      <SidebarContent />
    </aside>
  );
}

export default DesktopSidebar;
