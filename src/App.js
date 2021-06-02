import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Crypto from './Crypto';
import './App.modules.css';
import { debounce } from 'lodash';
import StripeStore from './StripeStore';

function App() {
	const [ cryptos, setCryptos ] = useState([]);
	const [ search, setSearch ] = useState('');
	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			)
			.then((res) => {
				setCryptos(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleChange = (event) => {
		handleText(event.target.value);
		console.log(event.target.value);
	};


	const handleText = debounce((text) => {
		setSearch(text);
	},500);
	const filteredCryptos = cryptos.filter((crypto) => crypto.name.toLowerCase().includes(search.toLowerCase()));
	return (
		<div className="app">
			<div className="crypto-search">
				
				<img className="wolflogo" src="./wolfy.jpeg" alt="wolfpic" /> 
				{/* <div className='bottom-center'>SeaWolf Crypto</div> */}
				<h1 className="crypto-text"> Search Your Favorite Crypto </h1>
				<form>
					<input type="text" placeholder="Search" className="crypto-input" onChange={handleChange} />
				</form>
			</div>

			{filteredCryptos.map((crypto) => {
				return (
					<Crypto
						key={crypto.id}
						name={crypto.name}
						price={crypto.current_price}
						symbol={crypto.symbol}
						marketcap={crypto.total_volume}
						image={crypto.image}
						priceChange={crypto.price_change_percentage_24h}
						volume={crypto.market_cap}
					/>
				);
			})}
			{/* <StripeStore /> */}
		</div>
	);
}

export default App;

// I could return a spread of crypto instead of listing evererything out possibly?
