import React, { useContext, useState } from 'react';
import { WatchListContext } from '../context/watchListContext';

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);
  const availableCoins = [
    'bitcoin',
    'ethereum',
    'telcoin',
    'dogecoin',
    'ripple',
    'tether',
    'bitcoin-cash',
    'litecoin',
    'eos',
    'okb',
    'tezos',
    'cardano',
    'zcash',
    'xrp',
    'lumens',
    'polkadot',
    'stellar',
  ];

  const handleClick = coin => {
    addCoin(coin);
    setIsActive(false);
  };
  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <div className={isActive ? 'dropdown-menu show' : 'dropdown-menu'}>
        {availableCoins.map(coin => (
          <a onClick={() => handleClick(coin)} href="#" className="dropdown-item">
            {coin}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AddCoin;
