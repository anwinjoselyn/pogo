/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { sidebarValues } from '../../constants/defaultValues';

// import logo from '../../public/images/dragon.svg';

const Sidebar = ({ toggleSidebar, minified, ftw }: any) => {
  const router = useRouter();
  const { pathname } = router;
  let searchTerms = pathname.split('/');

  const [state, setState] = useState<any>({
    menuKey: null,
    subMenuKey: null,
    title: '',
    openMenuKey: null,
    sidebar: [],
  });

  useEffect(() => {
    state.sidebar = sidebarValues;
    setState({ ...state });
  }, []);

  useEffect(() => {
    let theMenu: Array<any> = [];
    let theSubmenu: Array<any> = [];
    theMenu = state.sidebar.filter(
      (menu: any) => menu.route.split('/')[1] === searchTerms[1]
    );

    if (theMenu && theMenu.length > 0 && theMenu[0].children) {
      theSubmenu = theMenu[0].children.filter(
        (submenuItem: any) => submenuItem.route === pathname
      );
      if (theSubmenu.length === 0) {
        theSubmenu = theMenu[0].children.filter(
          (submenu: any) => submenu.route.split('/')[2] === searchTerms[2]
        );
      }
    }

    if (theSubmenu && theSubmenu.length > 0) {
      setState({
        ...state,
        menuKey: theMenu[0].key,
        subMenuKey: theSubmenu[0].key,
        title: theSubmenu[0].title,
        openMenuKey: theMenu[0].key,
      });
    } else if (theMenu && theMenu.length > 0) {
      setState({
        ...state,
        menuKey: theMenu[0].key,
        subMenuKey: null,
        title: theMenu[0].title,
        openMenuKey: theMenu[0].key,
      });
    }
  }, [pathname, state.sidebar]);

  const onMenuClick = (key: number, route: string) => {
    setState({
      ...state,
      openMenuKey: key,
    });
    if (route) {
      router.replace(route);
    }
  };
  console.log('state', state);
  return (
    <div className="bg-theme-bgNav h-screen sticky top-0">
      <div
        className={`px-6 h-14 text-orange-dark cursor-pointer flex items-center`}
        role="presentation"
        onClick={toggleSidebar}
      >
        {/* <Image
          src={logo}
          alt="Logo"
          width={30}
          height={30}
          className="bg-orange-dark rounded-full"
        /> */}
        {minified ? '' : <span className="w-full text-right">PokeBubs</span>}
      </div>
      <div className="overflow-y-auto">
        {state?.sidebar?.map((menu: any) => {
          let menuClass: string =
            'text-theme-text-secondary hover:text-theme-text-h2';
          if (
            state &&
            (menu.key === state.menuKey || menu.key === state.openMenuKey)
          ) {
            if (menu?.children?.length > 0) {
              menuClass = 'text-theme-text-secondary';
            } else {
              menuClass = 'text-white hover:text-orange-light bg-theme-bg';
            }
          }
          return (
            <div
              key={menu.key}
              className={`cursor-pointer ${menuClass}`}
              onClick={() =>
                onMenuClick(
                  state && state.openMenuKey === menu.key ? null : menu.key,
                  menu.children.length === 0 ? menu.route : null
                )
              }
              role="presentation"
            >
              <div
                className={`text-lg flex items-center p-2 ${
                  minified ? 'justify-center' : ''
                }`}
              >
                <span
                  className={`material-icons text-lg ${minified ? '' : 'mr-3'}`}
                >
                  {menu.icon}
                </span>{' '}
                {!minified && menu.title}
              </div>
              {state &&
              menu.key === state.openMenuKey &&
              menu?.children?.length > 0
                ? menu.children.map((submenu: any) => {
                    let subMenuClass: string = 'text-orange';
                    if (
                      submenu.key === state.subMenuKey &&
                      menu.key === state.menuKey
                    ) {
                      subMenuClass =
                        'bg-theme-bg text-orange-light hover:text-white ';
                    } else {
                      subMenuClass =
                        'text-theme-text-secondary hover:text-theme-text-h2';
                    }
                    return !submenu.hide ? (
                      <Link
                        key={submenu.key}
                        href={!submenu.hide ? submenu.route : router.asPath}
                        passHref
                      >
                        <div
                          className={`text-base flex items-center py-2 ${subMenuClass} ${
                            minified ? 'justify-center' : 'pl-6'
                          }`}
                        >
                          <span
                            className={`material-icons ${
                              minified ? 'text-lg' : 'mr-3 text-base'
                            }`}
                          >
                            {submenu.icon}
                          </span>{' '}
                          {!minified && submenu.title}
                        </div>
                      </Link>
                    ) : (
                      <div
                        className={`text-base flex items-center py-2 ${subMenuClass} ${
                          minified ? 'justify-center' : 'pl-6'
                        }`}
                      >
                        <span
                          className={`material-icons ${
                            minified ? 'text-lg' : 'mr-3 text-base'
                          }`}
                        >
                          {submenu.icon}
                        </span>{' '}
                        {!minified && submenu.title}
                      </div>
                    );
                  })
                : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
