import React from 'react';
import { Table } from 'reactstrap';
// import './cryptoItem.modules.css';
import './CryptoCss.css';

// this is destructuring the data below. destructuring object passed as an argument in the function.
const Crypto = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
	return (
		<Table responsive>
			<thead>
				<tr className="table-header" scope="row">
					<th />
					<th>Name</th>
					<th>Price</th>
					<th>Change</th>
					<th>Volume</th>
					<th>Mkt Cap</th>
				</tr>
			</thead>
			<tbody>
				<tr scope="row">
					<td>
						<img className="cell-image" src={image} />
					</td>
					<td className="table-cell"> {name}</td>
					<td className="table-cell"> ${price.toLocaleString()}</td>
					<td className="table-cell">
						<p className={priceChange < 0 ? 'percent-red' : 'percent-green'}>
							{priceChange.toLocaleString(2)}%
						</p>
					</td>
					<td className="table-cell"> ${volume.toLocaleString(undefined)}</td>
					<td className="table-cell"> ${marketcap.toLocaleString()}</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default Crypto;

/// the best solution prob is to make a grid then shrink to columns. table is not as responsive
