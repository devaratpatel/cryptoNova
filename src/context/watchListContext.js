import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = props => {
  const [watchList, setWatchList] = useState(
    localStorage.getItem('watchList').split(',') || [
      'bitcoin',
      'ethereum',
      'ripple',
      'cardano',
      'dogecoin',
      'telcoin',
    ]
  );

  useEffect(() => {
    localStorage.setItem('watchList', watchList);
  }, [watchList]);

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
