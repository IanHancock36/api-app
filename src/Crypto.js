import React from 'react';
import { Table } from 'reactstrap';
import './Crypto.css';

// this is destructuring the data below. destructuring object passed as an argument in the function.
const Crypto = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
	return (
		<Table   responsive>
			<thead>
				<tr>
					<th />
					<th>Name</th>
					<th>Price</th>
					<th>Change</th>
					<th>Volume</th>
					<th>Mkt Cap</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<img className="cell-image" alt='coinImage' src={image} />
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


