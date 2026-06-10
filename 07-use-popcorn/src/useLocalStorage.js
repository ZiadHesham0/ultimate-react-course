import { useEffect, useState } from "react";

export default function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem(key));
    return savedItems ? savedItems : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}
