import { BackdropProps } from '../../types/BackdropProps';

function Backdrop({ children, className, onClick }: BackdropProps) {
  return (
    <div
      className={`fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ${className}`}
      onClick={() => { onClick?.(); }}
      role="presentation"
    >
      {children}
    </div>
  );
}

export default Backdrop;
