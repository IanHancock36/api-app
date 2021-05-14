import React from 'react';
import './Crypto.css'
// this is destructuring the data below.
const Crypto = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
	return (
		<div className="crypto-container">
			<div className="crypto-row">
				<div className="crypto">
					<image src={image} />
					<h1>{name}</h1>
					<p classname="crypto-symbol">{symbol}</p>
				</div>
				<div className="crypto-data" />
				<p className="crypto-price">${price}</p>
				<p className="crypto-volume">${volume.toLocaleString()}</p>

				{priceChange < 0 ? (
					<p className="crypto-percent" red>
						{priceChange.toFixed(2)}%
					</p>
				) : (
					<p className="crypto-percent" green>
						{priceChange.toFixed(2)}%
					</p>
				)}
				<p className="crypto-marketcap">Mkt Cap : ${marketcap.toLocaleString()}</p>
			</div>
		</div>
	);
};

export default Crypto;

//.toLocaleString() this is helps convert currency to the persons location.
// example const options = { style: 'currency, currency: 'eur'} const number = 2500.5
// (2500.5).toLocaleString('en-us' ,options ) this would convert to euro

// You can pass currency as an argument if you do not wish to set a currency.
// getPrice = price => {
//   const options = {
//style: 'currency',
//currency: 'eur'

//  };
// return price.toLocaleString(undefined, options)
// when you pass in undefined it is looking for the users exact location to convert the currency specifically to the area
// then you use getPrice(1222) this will return the currency in the specic currency of your location.
//}

// toFixed(2) 'he toFixed() method converts a number into a string, rounding to a specified number of decimals.'
