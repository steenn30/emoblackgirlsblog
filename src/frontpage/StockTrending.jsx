import { useEffect, useState } from 'react';

const YOUR_API_KEY = 'cusa4epr01qnihs5cfr0cusa4epr01qnihs5cfrg';
const stockSymbols = ["NVDA", "INTC", "META", "SNAP", "MSFT", "TSLA", "GOOGL", "XYZ", "AAPL", "PLTR", "AMZN", "UPST", "RDDT","CLSK", "SPY","COIN","UBER","DUOL", "ABNB", "HOOD", "NFLX"];
stockSymbols.sort();

const StockTrending = () => {
  const [stockData, setStockData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  const roundToNearestFiveMinutes = (timestamp) => {
    const date = new Date(timestamp);
    date.setMinutes(Math.floor(date.getMinutes() / 5) * 5, 0, 0);
    return date.toLocaleTimeString();
  };

  const getTotalStockSummary = () => {
    const totalPrice = stockData.reduce((sum, stock) => sum + (stock.c || 0), 0);
    const totalChange = stockData.reduce((sum, stock) => sum + (stock.d || 0), 0);
    const changeColor = totalChange >= 0 ? "#00FF00" : "#FF3333"; // High contrast green/red
  
    return (
      <div style={{ 
        textAlign: "center", 
        margin: "20px 0", 
        fontSize: "24px", 
        fontWeight: "bold", 
        padding: "20px", 
        background: "#222", 
        color: "white", 
        borderRadius: "10px" 
      }}>
        <p>Total Market Value: <span style={{ fontSize: "28px", color: "#FFD700" }}>${totalPrice.toFixed(2)}</span></p>
        <p>Total Change: <span style={{ fontSize: "28px", color: changeColor }}>
          <strong>{totalChange.toFixed(2)} ({(totalChange / totalPrice * 100).toFixed(2)}%)</strong>
        </span></p>
      </div>
    );
  };

  useEffect(() => {
    const fetchStockQuotes = async () => {
      try {
        let cachedData = JSON.parse(localStorage.getItem("stockData"));
        let lastFetch = localStorage.getItem("lastFetch");

        if (cachedData && lastFetch && Date.now() - lastFetch < 4 * 60 * 1000) {
          console.log("Using cached stock data");
          setStockData(cachedData);
          setLastUpdated(roundToNearestFiveMinutes(parseInt(lastFetch)));
          return;
        }

        console.log("Fetching new stock data...");
        let newStockData = [];
        
        for (let i = 0; i < stockSymbols.length; i += 5) {
          const batch = stockSymbols.slice(i, i + 5);
          const requests = batch.map(symbol =>
            fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${YOUR_API_KEY}`)
              .then(response => response.json())
              .then(data => ({ symbol, ...data }))
          );

          const results = await Promise.all(requests);
          newStockData = [...newStockData, ...results];

          await new Promise(res => setTimeout(res, 1000)); // Rate limit delay
        }

        setStockData(newStockData);
        setLastUpdated(roundToNearestFiveMinutes(Date.now()));

        localStorage.setItem("stockData", JSON.stringify(newStockData));
        localStorage.setItem("lastFetch", Date.now().toString());
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockQuotes();
    const interval = setInterval(fetchStockQuotes, 4 * 60 * 1000); // Update every 4 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Stock Quotes</h1>
      <p>Last Updated: {lastUpdated || "Loading..."}</p>
      <table border="1" cellPadding="10" style={{ margin: "auto", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Current Price ($)</th>
            <th>Open Price ($)</th>
            <th>High Price ($)</th>
            <th>Low Price ($)</th>
            <th>Change ($)</th>
            <th>Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock, index) => (
            <tr key={index}>
              <td><strong>{stock.symbol}</strong></td>
              <td>{stock.c}</td>
              <td>{stock.o}</td>
              <td>{stock.h}</td>
              <td>{stock.l}</td>
              <td style={{ color: stock.d >= 0 ? "#00FF00" : "#FF3333", fontWeight: "bold" }}>
                {stock.d.toFixed(2)}
              </td>
              <td style={{ color: stock.dp >= 0 ? "#00FF00" : "#FF3333", fontWeight: "bold" }}>
                {stock.dp.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {getTotalStockSummary()}
    </div>
  );
};

export default StockTrending;
