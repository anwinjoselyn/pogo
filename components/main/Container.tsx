import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import { Toaster } from 'react-hot-toast';

import Header from './Header';
import Sidebar from './SidebarNew';
import Footer from './Footer';

export default function Container({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState({ minified: false, isMinified: false });
  //   const [toggleSidebar, setToggleSidebar] = useState({
  //     show: false,
  //     showOnHover: false,
  //   });
  const toggleSidebar = (temp?: boolean) => {
    setState({
      minified: !state.minified,
      isMinified: temp ?? state.isMinified,
    });
  };

  return (
    <div className="flex">
      <Head>
        {/* <title>
          HiFaDD - a D&D game for Dungeon Masters and D&D aficianados
        </title> */}
        <meta
          name="title"
          property="og:title"
          content="HiFaDD - a D&D game for Dungeon Masters and D&D aficianados"
          key="title"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <div className={state.minified ? 'w-20' : 'w-1/4 md:w-[250px]'}>
        <Sidebar
          toggleSidebar={toggleSidebar}
          minified={state.minified}
          ftw={router.pathname.includes('/hfftw')}
        />
      </div>
      <div
        className={`flex justify-between flex-col ${
          state.minified ? 'w-full' : 'w-3/4 md:w-5/6 sm:w-4/5 lg:w-11/12'
        }`}
      >
        <Header ftw={router.pathname.includes('/hfftw')} />
        <div className="h-full flex">
          {children}
        </div>
        <Footer />
      </div>
      {/* <Toaster /> */}
    </div>
  );
}
