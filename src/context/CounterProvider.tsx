import {useState} from 'react';
import {CounterContext} from './CounterContext';

const CounterProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CounterContext.Provider value={{state: {count}, increment}}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
