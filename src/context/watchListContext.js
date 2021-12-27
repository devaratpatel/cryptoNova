import React from 'react';
import { createContext, useState } from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = props => {
  const [watchList, setWatchList] = useState([
    'bitcoin',
    'ethereum',
    'ripple',
    'dogecoin',
    'telcoin',
  ]);

  const addCoin = coin => {
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin]);
    }
  };
  const deleteCoin = coin => {
    setWatchList(watchList.filter(element => element !== coin));
  };
  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
