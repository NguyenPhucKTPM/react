import './App.css';
import { ContextProvider } from './containers/context';
import TestContext from './containers/testContext';
import Todos from './containers/Todos';
import Header from './containers/Header';
import { Outlet } from 'react-router-dom';
import Footer from './containers/Footer';


function App() {

  return (
    <ContextProvider>
      <div className='container'>
        <div className='header'> {' '} <Header /></div>
        {/* <TestContext /> */}
        <div className='outlet'>
          {' '}
          <Outlet />
        </div>
      </div>
      <div className='footer'>
        {' '}
        <Footer />
      </div>

    </ContextProvider>

  );
}

export default App;
