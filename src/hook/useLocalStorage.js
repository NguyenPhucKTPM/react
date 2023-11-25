  import { useEffect, useState } from 'react';

  export const useLocalStorage = () => {
    const [value, setValue] = useState('');


    const setItem = (key, value, callback) => {
      localStorage.setItem(key, value);
      // setValue(value);
      if (callback) {
        callback(value);
      }
    };

    const getItem = (key) => {
      const storedValue = localStorage.getItem(key);
      setValue(value);
      return storedValue;
    };

    const removeItem = (key) => {
      localStorage.removeItem(key);
      setValue(null);
    };
    useEffect(() => {
      const handleStorageChange = (event) => {
        // Kiểm tra key hoặc event.key để xác định liệu có thay đổi trong localStorage không.
        if (event.key === 'your_key') {
          const newValue = localStorage.getItem('your_key');
          setValue(newValue);
        }
      };

      window.addEventListener('storage', handleStorageChange);

      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, [])
    return {
      value,
      setItem,
      getItem,
      removeItem,
    };
  };
