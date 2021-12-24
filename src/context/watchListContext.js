import React from 'react';
import { createContext, useState } from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = props => {
  const [watchList, setWatchList] = useState(['bitcoin', 'ethereum', 'ripple', 'dogecoin']);
  console.log('props.children--->', props.children);
  return (
    <WatchListContext.Provider value={{ watchList }}>{props.children}</WatchListContext.Provider>
  );
};
