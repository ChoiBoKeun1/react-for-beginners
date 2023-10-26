import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => setUsd(event.target.value);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <input
        onChange={onChange}
        value={usd}
        type="number"
        placeholder="USD 입력"
      />
      USD
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select>
            {/*map을 사용하면 react.js는 element에 key를 주도록 한다.*/}
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): {usd / coin.quotes.USD.price}
                {coin.symbol}
              </option>
            ))}
          </select>
          <br />
        </div>
      )}
    </div>
  );
}

export default App;
