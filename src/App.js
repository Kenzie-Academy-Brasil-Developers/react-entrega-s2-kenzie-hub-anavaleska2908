import { Routes } from './routes';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [value, setValue] = useState('checking value...');
  useEffect(() => {
    let isMounted = true;
    fetch().then(() => {
      if (isMounted) {
        setValue('done!');
      }
    });
    return () => {
      isMounted = false;
    };
  });
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
