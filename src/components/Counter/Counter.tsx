import {useEffect} from 'react';
import {FaPlus} from 'react-icons/fa6';
import Message from '../Message/Message';
import './Counter.css';
import { useCounter } from '../../hooks/useCounter.tsx';
import useToast from '../../hooks/useToast';

const Counter: React.FC = () => {
  const {state, increment} = useCounter();
  const showToast = useToast();

  useEffect(() => {
    if (state.count) {
      showToast(<Message count={state.count} />, 'success');
    }
  }, [state]);
  return (
    <>
      <div className="counter">
        <div>
          <p> Current count: {state.count} </p>
          <button  onClick={increment}>
            <FaPlus className="Icon" />
            <span className="increment-text">1</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
