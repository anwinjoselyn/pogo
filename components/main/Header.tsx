import Link from 'next/link';
import Image from 'next/image';

import BreadCrumbs from './BreadCrumbs';
import useDarkMode from '../../hooks/useDarkMode';

const Header = ({ ftw }: any) => {
  const [theme, toggleTheme] = useDarkMode();
  const name = 'Anwin';
  const handleModes = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="top-0 z-10 flex flex-col items-center justify-between p-4 bg-newBlue-light3 dark:bg-newBlue-mid1 lg:sticky lg:flex-row shadow-header">
      <BreadCrumbs ftw={ftw} />
      <div className="flex items-center pr-4">
        {name ? (
          <>
            <span className="text-theme-text-secondary mr-2">
              Hi, {`${name}`}
            </span>
            <Link href="/profile">
              <span className="material-icons text-theme-text-secondary hover:text-theme-text-h2 self-center cursor-pointer">
                account_circle
              </span>
            </Link>
          </>
        ) : null}
        <span
          className="material-icons-outlined cursor-pointer ml-2"
          role="presentation"
          onClick={handleModes}
        >
          {theme === 'dark' ? 'light_mode' : 'dark_mode'}
        </span>
      </div>
    </div>
  );
};

export default Header;
