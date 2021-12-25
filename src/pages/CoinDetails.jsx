import React from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
  const { id } = useParams();
  console.log('this is cryptocurrency:', id);
  return (
    <div>
      <h5>Coin Details</h5>
    </div>
  );
};

export default CoinDetails;
