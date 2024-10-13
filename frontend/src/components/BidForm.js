import React, { useState } from 'react';
import { placeBid } from '../utils/contract';

function BidForm({ auctionId }) {
  const [bidAmount, setBidAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleBid = async (e) => {
    e.preventDefault();
    setStatus('Processing bid...');

    try {
      const result = await placeBid(auctionId, bidAmount);
      if (result.success) {
        setStatus('Bid placed successfully!');
      } else {
        setStatus('Bid unsuccessful. Try a higher amount.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error placing bid.');
    }
  };

  return (
    <form onSubmit={handleBid}>
      <input
        type="number"
        placeholder="Enter your bid"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        required
      />
      <button type="submit">Submit Bid</button>
      <p>{status}</p>
    </form>
  );
}

export default BidForm;