import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [ coins, setCoins ] = useState([]);
  const [search, setSearch] = useState('')
	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			)
			.then((res) => {
				setCoins(res.data);
			})
			.catch((error) => console.log(error));
	}, []);
  
  const handleChange = event => {
    setSearch(event.target.value)
    console.log(event.target.value)
  };

	return (
		<div className="crypto-app">
			<div className="crypto-search">
				<h1 className="crypto-text"> Search your favorite Crypto Currency</h1>
				<form>
					<input type="text" placeholder="Search" className="crypto-input" onChange={handleChange} />
				</form>
			</div>

		</div>
	);
}

export default App;
