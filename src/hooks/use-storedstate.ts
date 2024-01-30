import { SetStateAction, useState } from "react";

export const storage = {
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: <T>(key: string, defaultValue?: T): T => {
    const value = localStorage.getItem(key);
    return (value ? JSON.parse(value) : defaultValue) as T;
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
};

export const useStoredState = <T>(
  key: string,
  defaultValue?: T | (() => T)
) => {
  // 👇 Load stored state into regular react component state
  const [state, setState] = useState<T>(() => {
    const storedState = localStorage.getItem(key);

    if (storedState) {
      // 🚩 Data is stored as string so need to parse
      return JSON.parse(storedState) as T;
    }

    // No stored state - load default value if provided, otherwise use null
    if (typeof defaultValue !== "undefined") {
      return defaultValue instanceof Function ? defaultValue() : defaultValue;
    }

    return null as unknown as T; // Adjust default type as per your requirements
  });

  // 👇 Keeps the exact same interface as setState - value or setter function.
  const setValue = (value: SetStateAction<T> | ((prevState: T) => T)) => {
    const valueToStore = value instanceof Function ? value(state) : value;
    localStorage.setItem(key, JSON.stringify(valueToStore));
    setState(valueToStore);
  };

  // as const tells TypeScript you want tuple type, not array.
  return [state, setValue] as const;
};
