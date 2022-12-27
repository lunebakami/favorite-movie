import { useCallback, useState } from 'react';
import { sortMoviesByYear } from '../utils/sortMovies';

export const useLocalStorage = (
  key: string,
  initialValue: Array<Movie> | Object = []
) => {
  const [state, setState] = useState(() => {
    try {
      // Get item from local storage
      const storedValue = localStorage.getItem(key);

      if (!storedValue) {
        localStorage.setItem(key, JSON.stringify(initialValue));
      }

      // Check if the value is already stored, if not return the initial value
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.log(error);

      // In case of error, it returns the initial value
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: Array<Movie> | Object) => {
      try {
        // Sets the state and the item in local storage
        const orderedValues = sortMoviesByYear(value as Array<Movie>);

        setState(orderedValues);

        localStorage.setItem(key, JSON.stringify(orderedValues));
      } catch (error) {
        console.log(error);
      }
    },
    [key]
  );

  return [state, setValue] as const;
};
