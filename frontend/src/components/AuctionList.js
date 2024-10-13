import React from 'react';
import AuctionDetails from './AuctionDetails';

function AuctionList({ auctions }) {
  return (
    <div className="auction-list">
      {auctions.map((auction) => (
        <AuctionDetails key={auction.itemId} auction={auction} />
      ))}
    </div>
  );
}

export default AuctionList;