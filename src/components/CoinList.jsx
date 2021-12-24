import React, { useContext, useEffect, useState } from 'react';
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';

function CoinList() {
  const [coins, setCoins] = useState([]);
  const { watchList } = useContext(WatchListContext);
  console.log('watchList---->', watchList);
  useEffect(() => {
    const fetchData = async () => {
      const response = await coinGecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: watchList.join(', '),
        },
      });
      console.log('response.data -->', response.data);
    };
    fetchData();
  }, []);
  return <div></div>;
}

export default CoinList;
