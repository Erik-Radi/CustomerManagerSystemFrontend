import Backdrop from '../Backdrop';
import Spinner from './Spinner';

function Fallback() {
  return (
    <Backdrop className="bg-opacity-75 z-50 justify-center items-center">
      <Spinner />
    </Backdrop>
  );
}

export default Fallback;
