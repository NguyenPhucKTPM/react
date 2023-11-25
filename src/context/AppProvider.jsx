import {
    createContext,
    useState,
  } from 'react';
import { useLocalStorage } from '../hook/useLocalStorage';
import UserService from '../services/UserService';
  
export const AppContext =
    createContext(null);
  
  const initialSate = JSON.parse(
    localStorage.getItem('user')
  ) || {
    username: '',
    role: '',
    isAuthenticated: false,
  };
  
  export const AppProvider = ({
    children,
  }) => {
    const [currentUser, setCurrentUser] =
      useState(initialSate);
  
    const { setItem, removeItem } =
      useLocalStorage();
  
    const loginContext = (user) => {
      setCurrentUser((prevState) => ({
        ...prevState,
        username : user.username,
        role : user.role,
        isAuthenticated: true,
      }));
      setItem(
        'user',
        JSON.stringify({
          ...user,
          isAuthenticated: true,
        })
      );
    };
  
    const logoutContext = async () => {
      setCurrentUser({
        username: '',
        role: '',
        isAuthenticated: false,
      });
      removeItem('user');
      await UserService.Logout();
    };
  
    return (
      <AppContext.Provider
        value={{
          currentUser,
          loginContext,
          logoutContext
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };
  