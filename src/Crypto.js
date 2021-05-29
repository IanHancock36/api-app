import { Table } from 'reactstrap';
import React from 'react';
// import './cryptoItem.modules.css';

// this is destructuring the data below. destructuring object passed as an argument in the function.
const Crypto = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
	return (
		// 		 <div className="crypto-item">
		// 			<div className="item-cell">

		// 			<img className="cell-image" src={image} />
		// 			</div>
		// 			<div className="item-cell">
		// 				<div>{name}</div>
		// 			</div>
		// 			<div className="item-cell">{symbol}</div>
		// 			<div className="item-cell">{price}</div>
		// 			<div className="item-cell">
		// 				<p className={priceChange < 0 ? 'percent-red' : 'percent-green'}>{priceChange.toLocaleString(2)}%</p>
		// 				{/* <div>
		// 					<p className="crypto-volume">${volume.toLocaleString(undefined)}</p>
		// 				</div>
		// 				<div>
		// 					<p className="crypto-marketcap">Mkt Cap : ${marketcap.toLocaleString()}</p>
		// 				</div> */}
		// 			</div>
		// 		</div>

		// 	);
		// };
		// Below is using React strap to make a table
		<Table responsive>
			<tr>
				<td>
				<img src={image} />
				</td>
				<td>{name}</td>
				<td>{symbol}</td>
				<td>{price}</td>
				<td>
				{/* <p className={priceChange < 0 ? 'percent-red' : 'percent-green'}>{priceChange.toLocaleString(2)}%</p> */}
				</td>
				<td>${volume.toLocaleString(undefined)}</td>
				<td>Mkt Cap : ${marketcap.toLocaleString()}</td>
			</tr>
		</Table>
	);
};

export default Crypto;
