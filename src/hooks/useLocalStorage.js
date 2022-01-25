import { useEffect } from 'react';
import { useStore } from '../context/store';

export default function useLocalStorage() {
  const [state] = useStore();
  useEffect(() => {
    const stateCopy = { ...state };
    delete stateCopy.items;
    const string = JSON.stringify(stateCopy);
    localStorage.setItem('store', string);
  }, [state]);
}
