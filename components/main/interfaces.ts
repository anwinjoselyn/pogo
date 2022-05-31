export interface SidebarIF {
    menuKey: number;
    subMenuKey?: number;
    subsubMenuKey?: number;
    title: string;
    openMenuKey?: number;
    openSubMenuKey?: number;
  }
  
  export interface MenuIF {
    key: number;
    title: string;
    description?: string | JSX.Element;
    route: string;
    children?: Array<MenuIF>;
    hide?: boolean;
    subMenu?: boolean;
    icon?: string;
  }
  
  export interface SubMenuIF {
    show: boolean;
    sideBarMenus: Array<any>;
    key: number;
  }
  