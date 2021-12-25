import React, { useContext, useEffect, useState } from 'react';
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';
import Coin from '../components/Coin';

function CoinList() {
  const [coins, setCoins] = useState([]);
  const { watchList } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: watchList.join(', '),
        },
      });
      setCoins(response.data);
      console.log('response.data -->', response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderCoins = () => {
    if (isLoading) {
      <div>Loading...</div>;
    }
    return (
      <ul className="coinlist list-group mt-2">
        {coins.map(coin => (
          <Coin key={coin.id} coin={coin} />
        ))}
      </ul>
    );
  };
  return <div>{renderCoins()}</div>;
}

export default CoinList;
