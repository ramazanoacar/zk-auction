import React, { useState } from 'react';
import BidForm from './BidForm';

function AuctionDetails({ auction }) {
  const [showBidForm, setShowBidForm] = useState(false);

  const handleBidClick = () => {
    setShowBidForm(!showBidForm);
  };

  return (
    <div className="auction-item">
      <h2>Item ID: {auction.itemId}</h2>
      <p>Starting Price: ${auction.startingPrice}</p>
      <p>
        Time: {new Date(auction.startTime * 1000).toLocaleString()} -{' '}
        {new Date(auction.endTime * 1000).toLocaleString()}
      </p>
      <p>Status: {auction.status}</p>
      <button onClick={handleBidClick}>
        {showBidForm ? 'Cancel Bid' : 'Place a Bid'}
      </button>
      {showBidForm && <BidForm auctionId={auction.itemId} />}
    </div>
  );
}

export default AuctionDetails;