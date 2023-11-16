import './App.css';
import './App.scss';
import { ContextProvider } from './containers/context';
import TestContext from './containers/testContext';
import Todos from './containers/Todos';
import Header from './containers/Header';
import { Outlet } from 'react-router-dom';
import Footer from './containers/Footer';


function App() {

  return (
    <ContextProvider>
      <div className='header'> {' '} <Header /></div>

      {/* <TestContext /> */}

      <div className='container p-0 outlet'>
        {''}
        <Outlet />
      </div>
      <div className='footer' style={{background:'blue'}}>
        {' '}
        <Footer />
      </div>

    </ContextProvider>

  );
}

export default App;
