import {createContext} from 'react';

const context = {
  bg: '#008b91',
  color: '#fff',
};

type MyContextTypes = {
  bg: string;
  color: string;
};

export const MyContext = createContext<MyContextTypes>(context);

type StyleProviderProps = {
  children: React.ReactNode;
};

export const StyleProvider = ({children}: StyleProviderProps) => {
  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
};
