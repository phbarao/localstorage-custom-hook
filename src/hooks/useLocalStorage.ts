import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

type ReturnType<T> = [T | undefined, Dispatch<SetStateAction<T | undefined>>];

const useLocalStorage = <T>(key: string, initialValue?: T): ReturnType<T> => {
  const [state, setState] = useState<T | undefined>(() => {
    if (!initialValue) return;

    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.log(error);
      }
    }
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
