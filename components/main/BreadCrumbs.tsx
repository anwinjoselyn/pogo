/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState, memo, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import {
//   Link,
//   useRouteMatch,
//   generatePath,
//   useHistory,
// } from 'react-router-dom';
// import queryString from 'query-string';
import {
  breadcrumbSetterNew,
  filterInclude,
  capitalize,
} from '../../libs/helpers';
import { sidebarValues } from '../../constants/defaultValues';
import { GlobalContext } from '../../hooks/GlobalContext';
// import './style.css';

const BreadCrumbs = ({ ftw }: any) => {
  const { setNavigation } = useContext(GlobalContext);
  const router = useRouter();

  const { pathname, query }: any = router;

  const [state, setState] = useState<any>({
    isLoading: true,
    list: [],
  });

  useEffect(() => {
    const menu = JSON.parse(JSON.stringify(sidebarValues));
    const filteredMenu = menu.filter((item: any) =>
      filterInclude(item, pathname)
    );

    if (filteredMenu.length > 0) {
      setTimeout(() => {
        let navigation = sidebarValues.filter(
          (m: any) => m.route === filteredMenu[0].route
        );
        if (
          navigation.length > 0 &&
          navigation[0].children &&
          navigation[0].children.find((n: any) => n.route === pathname)
        ) {
          navigation = navigation[0].children.filter(
            (n: any) => n.route === pathname
          );
        }
        setNavigation(navigation);
      }, 500);
    }

    let breadcrumbs = breadcrumbSetterNew(filteredMenu[0], []);
    breadcrumbs = breadcrumbs.map(
      ({ title, route }: { [key: string]: string }) => {
        for (const key in query) {
          if (title.includes(key)) {
            title = capitalize(title.replace(`:${key}`, query[key]));
          }
        }
        // route = asPath;
        return { title, route };
      }
    );

    setState({
      ...state,
      isLoading: false,
      list: breadcrumbs,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname !== '/']);

  return (
    <ul className="flex items-center text-theme-text-footer">
      {/* <li>
        <Link href="/">Home</Link>
      </li> */}
      {state &&
        !state.isLoading &&
        state.list &&
        state.list.length > 0 &&
        state.list.map((item: any, i: number) => (
          <li key={item.route} className="flex items-center">
            {i === state.list.length - 1 ? (
              <span className="mt-1">{item.title}</span>
            ) : (
              <>
                <Link href={item.route}>{item.title}</Link>
                <span className="material-icons text-lg mt-1 mx-1 icon-chevron-right">
                  chevron_right
                </span>
              </>
            )}
          </li>
        ))}
    </ul>
  );
};

export default memo(BreadCrumbs);
