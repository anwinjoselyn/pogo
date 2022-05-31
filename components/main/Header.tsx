import Link from 'next/link';
import Image from 'next/image';

import BreadCrumbs from './BreadCrumbs';
// import useDarkMode from '../../hooks/useDarkMode';

const Header = ({ ftw }: any) => {
  const name = 'Anwin';
  return (
    <div className="bg-theme-bgNav flex flex-row justify-between content-center items-center h-14 sticky top-0 z-20 pl-8">
      <BreadCrumbs ftw={ftw} />
      <div className="flex items-center">
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
            <span className="material-icons text-theme-text-secondary hover:text-theme-text-h2 ml-4 mr-7 self-center cursor-pointer">
              notifications
            </span>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
