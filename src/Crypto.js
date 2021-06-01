import React from 'react';
import { Table }from 'reactstrap';

// import './cryptoItem.modules.css';
import './CryptoCss.css';

// this is destructuring the data below. destructuring object passed as an argument in the function.
const Crypto = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
	return (
		//  <div className="crypto-item">
		// 	<div className="item-cell">

		// 	<img className="cell-image" src={image} />
		// 	</div>
		// 	<div className="item-cell">
		// 		<div>{name}</div>
		// 	</div>
		// 	<div className="item-cell">{symbol}</div>
		// 	<div className="item-cell">${price}</div>
		// 	<div className="item-cell">
		// 		<p className={priceChange < 0 ? 'percent-red' : 'percent-green'}>{priceChange.toLocaleString(2)}%</p>
		// 		<div>
		// 			<p className="item-cell">${volume.toLocaleString(undefined)}</p>
		// 		</div>
		// 		<div>
		// 			<p className="item-cell">Mkt Cap : ${marketcap.toLocaleString()}</p>
		// 		</div>
		// 	</div>
		// </div>

		// 	);
		// };
		// Below is using React strap to make a table
		// <table class="table">
		// 	<thead>
		// 		<th>Image </th>
		// 		<th>Name</th>
		// 		<th>Symbol</th>
		// 		<th>Price</th>
		// 		<th>Price Change</th>
		// 		<th>Volume</th>
		// 		<th>Mkt Cap</th>
		// 	</thead>
		// 	<tbody>
		// 		<tr>
		// 			<td data-lable ='Image'>
		// 				<img className="cell-image" src={image} />
		// 			</td>
		// 			<td data-table='Name'>{name}</td>
		// 			<td data-table='Symbol' > {symbol}</td>
		// 			<td data-table='Price'> ${price.toLocaleString()}</td>
		// 			<td data-table='Price-Change'>
		// 				<p className={priceChange < 0 ? 'percent-red' : 'percent-green'}>
		// 					{priceChange.toLocaleString(2)}%
		// 				</p>
		// 			</td>
		// 			<td data-table='Volume'> ${volume.toLocaleString(undefined)}</td>
		// 			<td data-table='Market-Cap'> ${marketcap.toLocaleString()}</td>
		// 		</tr>
		// 	</tbody>
		// </table>
		<Table bordered responsive className='no-Wrap'>
 				<thead>

 					<tr scope='row'>


 						<th className="text-center">Img</th>
 						<th  colSpan="250"className="text-center">Name</th>
 						<th  colSpan="250"className="text-center">Price</th>
 						<th colSpan="250" className="text-center">Change</th>
 						<th  colSpan="250"className="text-center">Volume</th>
 						<th  colSpan="250"className="text-center">Mkt Cap</th>

 					</tr>

 				</thead>
 				<tbody>

 					<tr scope = 'row'>

 				

 						<td className="text-center">
 							<img className="cell-image" src={image} />
 						</td>
 						<td colSpan="250" className="text-center"> {name}</td>
 						<td  colSpan="250"className="text-center"> ${price.toLocaleString()}</td>
 						<td  colSpan="250" className="text-center">
 							<p className={priceChange < 0 ? 'percent-red' : 'percent-green'}>
 								{priceChange.toLocaleString(2)}%
 							</p>
 						</td>
 						<td  colSpan="250"className="text-center"> ${volume.toLocaleString(undefined)}</td>
 						<td  className="text-center"> ${marketcap.toLocaleString()}</td>

		
 					</tr>
					 </tbody>
					 </Table>

	);
};

export default Crypto;

/// the best solution prob is to make a grid then shrink to columns. table is not as responsive
