import React, { createContext, useState } from "react";

const AppContext = createContext(null);

const AppContextProvider = ({children}) => {
  const [appContext, setAppContext] = useState({
    books: [
      {
        id: 1,
        name: 'Curs de vanzari',
        author: 'Cineva',
        price: 123
      },
      {
        id: 2,
        name: 'Alta carte',
        author: 'Ceva',
        price: 321
      }
    ]
  });
  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
