import React from 'react';
import CounterProvider from './context/CounterProvider';
import Counter from './components/Counter/Counter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => (
  <CounterProvider>
    <Counter />
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick={false}
        pauseOnHover={true}
        draggable={true}
        theme="colored"
        closeButton={false}
      />
  </CounterProvider>
);

export default App;
