/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState } from 'react';

const initialState: any = {
  navigation: [],
};

export const GlobalContext = createContext({ ...initialState });

const GlobalContextProvider: any = ({ children }: any) => {
  const [state, setState] = useState<any>({
    ...initialState,
  });

  const setNavigation = (navigation: any) => {
    setState({ ...state, navigation });
  };

  return (
    <GlobalContext.Provider value={{ ...state, setNavigation }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
