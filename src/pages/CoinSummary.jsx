import React from 'react';
import AddCoin from '../components/AddCoin';
import CoinList from '../components/CoinList';

function CoinSummary() {
  return (
    <div>
      <AddCoin />
      <CoinList />
    </div>
  );
}

export default CoinSummary;
