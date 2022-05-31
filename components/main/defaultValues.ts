import { SidebarIF, SubMenuIF } from './interfaces';

export const sidebarInit: SidebarIF = {
  menuKey: 0,
  subMenuKey: 0,
  subsubMenuKey: 0,
  title: '',
  openMenuKey: 0,
  openSubMenuKey: 0,
};

export const subMenuInit: SubMenuIF = {
  show: false,
  sideBarMenus: [],
  key: 0,
};
