<<<<<<< HEAD
import React from 'react';
import './Crypto.css';

// Need to use a table on this instead of what we are doing now.  

// this is destructuring the data below. destructuring object passed as an argument in the function.
const Crypto = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
	return (
		<div className="crypto-item">
			<div className="item-cell cell-header">
				<div>
					<img className="cell-image" src={image} />
				</div>
				<div>{name}</div>
			</div>
			<div className="item-cell">{symbol}</div>
			<div className="item-cell">{price}</div>
			<div>
	<p className="crypto-volume">${volume.toLocaleString(undefined)}</p>
	</div>
	<div>
	{priceChange < 0 ? (
		<p className="crypto-percent red">{priceChange.toFixed(2)}%</p>
	) : (
		<p className="crypto-percent green">{priceChange.toFixed(2)}%</p>
	)}
	<p className="crypto-marketcap">Mkt Cap : ${marketcap.toLocaleString()}</p>
	</div>
</div>
		
	);
=======
import React from "react";
import "./cryptoItem.modules.css";
// this is destructuring the data below. destructuring object passed as an argument in the function.
const Crypto = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="crypto-item">
      <div className="item-cell">
        <img className="cell-image" src={image} />
      </div>
      <div className="item-cell">
        <div>{name}</div>
      </div>
      <div className="item-cell">{symbol}</div>
      <div className="item-cell">{price}</div>
      <div className="item-cell">
        <p className={priceChange < 0 ? "percent-red" : "percent-green"}>
          {priceChange.toLocaleString(2)}%
        </p>
      </div>
    </div>
  );
>>>>>>> 0712c1888f259ca183a4307cdc706a18d009ad17
};

export default Crypto;

<<<<<<< HEAD

=======
// <div className="crypto-row">
// 	<div className="crypto">
// 		<img src={image} alt="crypto-logo"/>
// 		<h1>{name}</h1>

// 		<p className="crypto-symbol">{symbol}</p>
// 	</div>
// 	<div>
//        <p className="crypto-price">${price}</p>
// 	</div>
// 	<div>
// 	<p className="crypto-volume">${volume.toLocaleString(undefined)}</p>
// 	</div>
// 	<div>
//
// 	<p className="crypto-marketcap">Mkt Cap : ${marketcap.toLocaleString()}</p>
// 	</div>
// </div>
>>>>>>> 0712c1888f259ca183a4307cdc706a18d009ad17

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



