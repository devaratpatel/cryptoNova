import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoinData from '../components/CoinData';
import { HistoryChart } from '../components/HistoryChart';
import coinGecko from '../apis/coinGecko';

const CoinDetails = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = data => {
    return data.map(element => {
      return {
        t: element[0],
        y: element[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, month, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: 'usd',
            days: '1',
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: 'usd',
            days: '7',
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: 'usd',
            days: '30',
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: 'usd',
            days: '365',
          },
        }),
        coinGecko.get('/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: id,
          },
        }),
      ]);
      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        month: formatData(month.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <div className="coinlist">
          <HistoryChart data={coinData} />
          <CoinData data={coinData.detail} />
        </div>
      );
    }
  };

  return renderData();
};

export default CoinDetails;
