// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
import {
    Navigate,
    Outlet,
    createBrowserRouter,
  } from 'react-router-dom';
  import MainLayout from '../components/layouts/MainLayout';
  import Home from '../pages/Home';
  import AdminLayout from '../components/layouts/AdminLayout/AdminLayout';
  import Login from '../pages/Login/Login';
  import User from '../pages/Admin/User';
  import UserAdd from '../pages/Admin/UserAdd';
  import {
    useContext,
    useEffect,
  } from 'react';
  import { AppContext } from '../context/AppProvider';
  
  function ProtectedRoute() {
    const { isAuthenticated } =
      useContext(AppContext);
    return isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to='/login' />
    );
  }
  
  function RejectedRoute() {
    const { currentUser } =
      useContext(AppContext);
    const { isAuthenticated } =
      currentUser;
  
    return !isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to='/' />
    );
  }
  
  const router = createBrowserRouter([
    {
      children: [
        {
          index: true,
          element: (
            <MainLayout>
              <Home />
            </MainLayout>
          ),
        },
      ],
    },
    {
      element: <RejectedRoute />,
      children: [
        {
          path: '/login',
          element: (
            <MainLayout>
              <Login />
            </MainLayout>
          ),
        },
      ],
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          index: true,
          path: 'dashboard/users',
  
          element: (
            <AdminLayout>
              <User />
            </AdminLayout>
          ),
        },
        {
          path: 'dashboard/users/add',
  
          element: (
            <AdminLayout>
              <UserAdd />
            </AdminLayout>
          ),
        },
      ],
    },
  ]);
  
  export default router;
  