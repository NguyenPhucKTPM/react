import './App.css';
import './App.scss';

import { RouterProvider } from 'react-router-dom';

import router from './containers/route';
import { useContext } from 'react';
import { AppContext } from './context/AppProvider';
import { eventEmitter } from './services/customizeAxios';

function App() {
  const {logoutContext} = useContext(AppContext);
  eventEmitter.on("tokenExpried", function (data) {
    logoutContext()
  });
  return (
    <RouterProvider router={router} />
  );
}

export default App;
