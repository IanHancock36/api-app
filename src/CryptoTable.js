import React from 'react'

const CryptoTable = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
	return (
        <tr>
    <td><img className="cell-image" src={image} /> </td>
    <td>{name} </td>
    <td>{symbol}</td>
    <td>{price} </td>
    <td>${volume.toLocaleString(undefined)} </td>
    <td> {priceChange < 0 ? "percent-red" : "percent-green"}
         {priceChange.toLocaleString(2)}%
    </td>
    <td>Mkt Cap : ${marketcap.toLocaleString()} </td>
    </tr>
	

		
	);
};


export default CryptoTable;
