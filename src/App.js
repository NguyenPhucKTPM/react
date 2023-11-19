import './App.css';
import './App.scss';
import { ContextProvider } from './containers/context';
import TestContext from './containers/testContext';
import Todos from './containers/Todos';
import Header from './containers/Header';
import { Outlet } from 'react-router-dom';
import Footer from './containers/Footer';
import { ToastContainer, toast } from 'react-toastify'


function App() {

  return (
    <ContextProvider>
      <div className='header'> {' '} <Header /></div>

      {/* <TestContext /> */}

      <div className='container p-0 outlet'>
        {''}
        <Outlet />
      </div>
      <div className='footer' style={{ background: 'blue' }}>
        {' '}
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ContextProvider>


  );
}

export default App;
