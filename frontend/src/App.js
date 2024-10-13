import React, { useEffect, useState } from 'react';
import AuctionList from './components/AuctionList';
import { loadAuctionContract, fetchAuctions } from './utils/contract';

function App() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      await loadAuctionContract();
      const fetchedAuctions = await fetchAuctions();
      setAuctions(fetchedAuctions);
    };

    initialize();
  }, []);

  return (
    <div className="App">
      <h1>zk Auction Platform</h1>
      <AuctionList auctions={auctions} />
    </div>
  );
}

export default App;