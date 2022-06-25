import Link from 'next/link';
// import Image from 'next/image';

// import BreadCrumbs from './BreadCrumbs';
import useDarkMode from '../../hooks/useDarkMode';

const Header = () => {
  const [theme, toggleTheme] = useDarkMode();
  const name = 'Guest';
  const handleModes = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="top-0 z-10 flex flex-col items-center justify-end h-[60px] lg:sticky lg:flex-row bg-trial-header text-trial-light2 dark:bg-new-dark-9">
      {/* <BreadCrumbs ftw={ftw} /> */}
      <div className="flex items-center pr-4">
        {name ? (
          <>
            <span className="mr-2">
              Hi, {`${name}`}
            </span>
            <Link href="/profile">
              <span className="material-icons self-center cursor-pointer text-black-1">
                account_circle
              </span>
            </Link>
          </>
        ) : null}
        <span
          className="material-icons-outlined cursor-pointer ml-6 text-sm"
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
