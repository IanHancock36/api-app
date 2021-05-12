import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Crypto from './Crypto'
function App() {
	const [ cryptos, setCrypto ] = useState([]);
  const [search, setSearch] = useState('')
	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			)
			.then((res) => {
				setCrypto(res.data);
			})
			.catch((error) => console.log(error));
	}, []);
  
  const handleChange = event => {
    setSearch(event.target.value)
    console.log(event.target.value)
  };
  const filteredCrypto = cryptos.filter(crypto =>
    crypto.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
	return (
		<div className="crypto-app">
			<div className="crypto-search">
				<h1 className="crypto-text"> Search your favorite Crypto Currency</h1>
				<form>
					<input type="text" placeholder="Search" className="crypto-input" onChange={handleChange} />
				</form>
			</div>
    {filteredCrypto.map(crypto=>{
      return <Crypto/>
    })}
		</div>
	);
}

export default App;


// I could return a spread of coin instead of listing evererything out possibly? 