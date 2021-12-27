import React, { useState } from 'react';

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
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
          <a href="#" className="dropdown-item">
            {coin}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AddCoin;
