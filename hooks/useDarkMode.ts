import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const isDarkSet = localStorage.theme && localStorage.theme === 'dark';
    const isDarkPreferred = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (isDarkSet && isDarkPreferred) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  // let colorTheme = theme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    if (theme) {
      const root: any = window.document.documentElement;

      if (theme === 'dark') {
        root.classList.remove('light');
        root.classList.add(theme);
      } else {
        root.classList.remove('dark');
        root.classList.remove(theme);
      }

      if (typeof window !== 'undefined') {
        const localStorageTheme = localStorage.getItem('theme');
        if (
          !localStorageTheme ||
          (localStorageTheme && localStorageTheme !== theme)
        ) {
          localStorage.setItem('theme', theme);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return [theme, setTheme] as const;
};

export default useDarkMode;
