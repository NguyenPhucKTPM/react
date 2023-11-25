import './App.css';
import './App.scss';

import { Outlet, RouterProvider } from 'react-router-dom';

import router from './containers/route';


function App() {

  return (


    <RouterProvider router={router} >
        
     
    </RouterProvider>



  );
}

export default App;
