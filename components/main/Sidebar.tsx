/* eslint-disable no-loop-func */
/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { sidebarValues } from '../../constants/defaultValues';
import { sidebarInit, subMenuInit } from './defaultValues';
import { MenuIF } from './interfaces';

import { getItem, setItem } from '../../constants/storage';

const Sidebar = ({ toggleSidebar, setToggleSidebar }: any) => {
  const router = useRouter();
  const { pathname } = router;
  let searchTerms = pathname.split('/');
  const [state, setState] = useState(sidebarInit);
  const [subMenu, setSubMenu] = useState(subMenuInit);

  useEffect(() => {
    setToggleSidebar({
      ...toggleSidebar,
      show: getItem('sidebar') === 'true',
    });
    let theMenu: Array<MenuIF> = [];
    let theSubmenu: Array<MenuIF> = [];
    let theSubSubmenu: Array<MenuIF> = [];
    if (state.menuKey) {
      theMenu = sidebarValues.filter(
        (menu: MenuIF) => menu.key === state.menuKey
      );
    } else {
      theMenu = sidebarValues.filter(
        (menu: MenuIF) => menu.route.split('/')[1] === searchTerms[1]
      );
    }
    if (theMenu && theMenu.length > 0 && theMenu[0].children) {
      theSubmenu = theMenu[0].children.filter(
        (submenuItem: MenuIF) => submenuItem.route === location.pathname
      );
      if (theSubmenu.length === 0) {
        theSubmenu = theMenu[0].children.filter(
          (submenu: MenuIF) => submenu.route.split('/')[2] === searchTerms[2]
        );
      }
    }
    if (theSubmenu && theSubmenu.length > 0 && theSubmenu[0].children) {
      theSubSubmenu = theSubmenu[0].children.filter(
        (subsubmenuItem: MenuIF) =>
          subsubmenuItem.route === location.pathname && !subsubmenuItem.hide
      );
      if (theSubSubmenu.length === 0) {
        theSubSubmenu = theSubmenu[0].children.filter(
          (subsubmenu: MenuIF) =>
            subsubmenu.route.split('/')[2] === searchTerms[2] &&
            !subsubmenu.hide
        );
      }
    }
    /** @ToDo Check for a better approach */
    let i = 2;
    while (theSubSubmenu.length > 1) {
      i += 1;
      theSubSubmenu =
        theSubmenu[0]?.children?.filter(
          (subsubmenu: MenuIF) =>
            subsubmenu.route.split('/')[i] === searchTerms[i] &&
            !subsubmenu.hide
        ) ?? [];
    }
    if (theSubSubmenu.length > 0 && theSubSubmenu && theMenu[0].subMenu) {
      setState({
        ...state,
        subMenuKey: theSubmenu[0].key,
        subsubMenuKey: theSubSubmenu[0].key,
        title: `Clickpost | ${theSubSubmenu[0].title}`,
        openSubMenuKey: theSubmenu[0].key,
      });
    } else if (theSubmenu && theSubmenu.length > 0) {
      setState({
        ...state,
        menuKey: theMenu[0].key,
        subMenuKey: theSubmenu[0].key,
        title: `Clickpost | ${theSubmenu[0].title}`,
        openMenuKey: theMenu[0].key,
      });
    } else if (theMenu && theMenu.length > 0) {
      setState({
        ...state,
        menuKey: theMenu[0].key,
        subMenuKey: 0,
        title: `Clickpost | ${theMenu[0].title}`,
        openMenuKey: theMenu[0].key,
      });
    } else {
      /**
       * @todo Will navigate to desired route once our system will have role-based access control.
       */
    }
    if (theMenu[0]?.subMenu) {
      const subSideBar = sidebarValues.filter((menu: any) => menu.subMenu)[0];
      const sideBarMenus = subSideBar.children;
      const { key } = subSideBar;
      setSubMenu({ show: true, sideBarMenus, key });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMenuClick = (menuItem: any, menus: any) => {
    if (hiddenOrNoChildren(menuItem)) {
      setSubMenu({ show: true, sideBarMenus: [], key: 0 });
      router.push(menuItem.route);
    } else {
      if (menuItem.subMenu) {
        const subSideBar = menus.filter((menu: any) => menu.subMenu)[0];
        const sideBarMenus = subSideBar.children;
        const { key } = subSideBar;
        setSubMenu({ show: true, sideBarMenus, key });
      }
      if (subMenu.show) {
        setState({
          ...state,
          openSubMenuKey:
            state.openSubMenuKey === menuItem.key ? null : menuItem.key,
        });
      } else {
        setState({
          ...state,
          openMenuKey: state.openMenuKey === menuItem.key ? null : menuItem.key,
        });
      }
    }
  };

  const handleSubMenuClick = (e: any, menuKey: number, submenu: MenuIF) => {
    setSubMenu({ ...subMenu, sideBarMenus: [], key: 0 });
    if (subMenu.show) {
      setState({
        ...state,
        subMenuKey: menuKey,
        subsubMenuKey: submenu.key,
        openSubMenuKey: menuKey,
        title: `Clickpost | ${submenu.title}`,
      });
    } else {
      setState({
        ...state,
        menuKey,
        subMenuKey: submenu.key,
        title: `Clickpost | ${submenu.title}`,
        openMenuKey: menuKey,
      });
    }
    e.stopPropagation();
  };

  const menuOrSubMenuActive = (submenuItem: any, menuItem: any) =>
    (submenuItem.key === state.subMenuKey && menuItem.key === state.menuKey) ||
    (submenuItem.key === state.subsubMenuKey &&
      menuItem.key === state.subMenuKey);

  const isMenuExpanded = (key: number) =>
    key === state.openMenuKey || key === state.openSubMenuKey;

  const hiddenOrNoChildren = (menuItem: any) =>
    menuItem.children?.length === 0 ||
    menuItem.children?.every((item: any) => item.hide);

  const collapsedMenuActiveItem = (key: number, subMenus: any[] = []) => {
    if (subMenus.length > 0 && key === state.subMenuKey) {
      return true;
    }
    if (!state.menuKey && subMenu.key && subMenu.key === key) {
      return true;
    }
    if (state.menuKey && state.menuKey === key) {
      return true;
    }
    return false;
  };

  const handleMouseEvent = (enter: boolean, show: boolean) => {
    if (enter || toggleSidebar.showOnHover) {
      setTimeout(() => {
        setToggleSidebar({ ...toggleSidebar, show, showOnHover: true });
      }, 500);
    }
  };

  const isSideBarHovered = () =>
    toggleSidebar.showOnHover && !toggleSidebar.show;

  const iconOnClick = (fwdIcon = false) => {
    // if icon is pin -> on click show sidebar in expanded mode
    if (isSideBarHovered()) {
      setToggleSidebar({ show: false, showOnHover: false });
      setItem('sidebar', `${toggleSidebar.show}`);
    } else if (fwdIcon) {
      setToggleSidebar({ show: !toggleSidebar.show, showOnHover: false });
      setItem('sidebar', `${!toggleSidebar.show}`);
    } else {
      setToggleSidebar({ show: !toggleSidebar.show, showOnHover: true });
      setItem('sidebar', `${!toggleSidebar.show}`);
    }
  };

  const renderSideBarItems = (menus: any) => {
    const openMenuKey = subMenu.show ? state.openSubMenuKey : state.openMenuKey;
    const menuKey = subMenu.show ? state.subMenuKey : state.menuKey;
    return (
      menus.length > 0 &&
      menus
        .filter((menuItem: MenuIF) => !menuItem.hide)
        .map((menuItem: MenuIF) => (
          <div
            key={menuItem.key}
            className={`text-white menu d-block w-100 pt-3 cursor-pointer ${
              menuItem.key === menuKey || menuItem.key === openMenuKey
                ? 'active'
                : ''
            }`}
            onClick={() =>
              (menuItem.key === menuKey || menuItem.key === openMenuKey) &&
              hiddenOrNoChildren(menuItem)
                ? null
                : handleMenuClick(menuItem, menus)
            }
            role="presentation"
          >
            <div className="d-flex justify-content-between align-items-center">
              <div
                className={`px-3 d-flex align-items-center ${
                  isMenuExpanded(menuItem.key) && !menuItem.subMenu // dont show settings as active
                    ? 'dashed-border pb-3 w-100'
                    : ''
                }`}
              >
                <span className="material-icons px-2 fs-16">
                  {menuItem.icon}
                </span>
                <span className="fw-600">{menuItem.title}</span>
              </div>
              <span
                className={`mr-3 material-icons expand ${
                  menuItem.key === menuKey ? 'active' : ''
                } ${openMenuKey === menuItem.key && 'rotate-180'} ${
                  isMenuExpanded(menuItem.key) || hiddenOrNoChildren(menuItem)
                    ? 'd-none'
                    : ''
                }`}
              >
                {menuItem.subMenu ? 'chevron_right' : 'expand_more'}
              </span>
            </div>
            <div className="description pl-5 overflow-hidden pb-3">
              {/* for menu items like settings, always show submenu titles when any submenu inside it is selected */}
              {(menuItem.key !== openMenuKey ||
                (menuItem.subMenu && menuItem.key === openMenuKey)) &&
                menuItem?.children &&
                menuItem?.children?.length > 0 &&
                menuItem?.children
                  .filter((submnuItem: MenuIF) => !submnuItem.hide)
                  .map((submnuItem: MenuIF) => (
                    <span key={submnuItem.key} className="pl-1 fs-12">
                      {submnuItem.title}
                    </span>
                  ))}
              {hiddenOrNoChildren(menuItem) ? (
                <span className="pl-1 fs-12">{menuItem.description}</span>
              ) : null}
            </div>
            {
              /** @todo Will reduce the code complexity once our system will have role-based access control.  */
              !menuItem.subMenu &&
              menuItem.key === openMenuKey &&
              menuItem?.children &&
              menuItem.children?.filter(
                (submnuItem: MenuIF) => !submnuItem.hide
              ).length > 0 ? (
                <ul className="submenu-wrapper pb-3">
                  {menuItem.children
                    .filter((submnuItem: MenuIF) => !submnuItem.hide)
                    .map((submenuItem: MenuIF) => (
                      <li
                        key={submenuItem.key}
                        className={`submenu ${
                          menuOrSubMenuActive(submenuItem, menuItem)
                            ? 'active'
                            : ''
                        } d-flex pl-4 align-items-center justify-content-start`}
                        onClick={(e: any) =>
                          menuOrSubMenuActive(submenuItem, menuItem)
                            ? null
                            : handleSubMenuClick(e, menuItem.key, submenuItem)
                        }
                        role="presentation"
                      >
                        <span className="material-icons w-20 fs-12 fw-600 mr-1">
                          {menuOrSubMenuActive(submenuItem, menuItem)
                            ? 'done'
                            : ''}
                        </span>
                        <Link href={submenuItem.route} className="fs-12">
                          {submenuItem.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              ) : null
            }
          </div>
        ))
    );
  };

  const toggleIcon = (fwdIcon = false) => {
    let icon = 'arrow_back_ios';
    if (isSideBarHovered()) {
      icon = 'push_pin';
    } else if (fwdIcon) {
      icon = 'arrow_forward_ios';
    }
    return (
      <div
        className={`h-full py-2 px-3 bottom-0 sidebar-footer position-sticky d-flex justify-content-${
          fwdIcon ? 'center' : 'end'
        } align-items-end`}
      >
        <span
          role="presentation"
          onClick={() => iconOnClick(fwdIcon)}
          className="fs-10 cursor-pointer rounded-circle sidebar-circle-bg p-2 material-icons"
        >
          {icon}
        </span>
      </div>
    );
  };

  const collapsedSideBar = () => {
    const menus = subMenu.show
      ? subMenu.sideBarMenus.filter((menuItem: MenuIF) => !menuItem.hide)
      : sidebarValues.filter((menuItem: MenuIF) => !menuItem.hide);
    return (
      <>
        <div>
          {subMenu.show ? (
            <div
              className="text-white d-block w-100 my-4 text-center cursor-pointer"
              onClick={() => setSubMenu({ ...subMenu, show: false })}
              role="presentation"
            >
              <span
                onMouseEnter={() => handleMouseEvent(true, false)}
                className="cursor-pointer sidebar-circle-bg fs-12 rounded-circle p-2 mr-2 material-icons"
              >
                west
              </span>
            </div>
          ) : null}
          {menus.length > 0 &&
            menus.map((menuItem: MenuIF) => (
              <div
                key={menuItem.key}
                className="text-white d-block w-100 my-4 text-center cursor-pointer"
                onClick={() =>
                  collapsedMenuActiveItem(menuItem.key, subMenu.sideBarMenus) &&
                  hiddenOrNoChildren(menuItem)
                    ? null
                    : handleMenuClick(menuItem, menus)
                }
                role="presentation"
              >
                <span
                  onMouseEnter={() => handleMouseEvent(true, false)}
                  className={`material-icons collapsed-menu-item p-2 fs-16 ${
                    collapsedMenuActiveItem(menuItem.key, subMenu.sideBarMenus)
                      ? 'active-menu-item'
                      : ''
                  } rounded-6`}
                >
                  {menuItem.icon}
                </span>
              </div>
            ))}
        </div>
        {toggleIcon(true)}
      </>
    );
  };

  return (
    <div
      className={`p-0 h-full sidebar-new ${
        isSideBarHovered() && !toggleSidebar.show
          ? 'position-absolute z-index-999 box-shadow-right'
          : ''
      } ${
        toggleSidebar.show
          ? 'collapsed-sidebar d-flex justify-content-between flex-column'
          : ''
      }`}
      id="sidebar"
    >
      {toggleSidebar.show ? (
        <>{collapsedSideBar()}</>
      ) : (
        <div
          onMouseLeave={() => handleMouseEvent(false, true)}
          className="sidebar-wrapper d-flex flex-column"
        >
          <div>
            {subMenu.show ? (
              <>
                <div className="p-3 sidebar-header d-flex justify-content-start align-items-center">
                  <span
                    role="presentation"
                    onClick={() => setSubMenu({ ...subMenu, show: false })}
                    className="cursor-pointer sidebar-circle-bg fs-12 rounded-circle p-2 mr-2 material-icons"
                  >
                    west
                  </span>
                  <span className="fs-12">Back to Menu</span>
                </div>
                {renderSideBarItems(subMenu.sideBarMenus)}
              </>
            ) : (
              renderSideBarItems(sidebarValues)
            )}
          </div>
          {toggleIcon()}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
