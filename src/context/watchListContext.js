import React from 'react';
import { createContext, useState } from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = props => {
  const [watchList, setWatchList] = useState(['bitcoin', 'ethereum', 'ripple', 'dogecoin']);
  console.log('props.children--->', props.children);

  const deleteCoin = coin => {
    setWatchList(watchList.filter(element => element !== coin));
  };
  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
