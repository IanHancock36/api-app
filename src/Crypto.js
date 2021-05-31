import React from 'react'
import { Table, Container } from 'reactstrap';
// import './cryptoItem.modules.css';
import './CryptoCss.css'

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
		<Container>
		<Table bordered responsive className='noWrap'>
			<thead>
				<tr>
				
					<th>Img</th>
					<th>Name:</th>
					<th>Price:</th>
					<th>Change:</th>
					<th>Volume:</th>
					<th>Mkt Cap:</th>
				
					
				</tr>
			</thead>
			<tbody>
        <tr>
          <th scope="row"><img className="cell-image" src={image}/></th>
         
		  <td> {name}</td>
		  <td>${price}</td>
		  <td><p className={priceChange < 0 ? 'percent-red' : 'percent-green'}>{priceChange.toLocaleString(2)}%</p></td>
          <td>${volume.toLocaleString(undefined)}</td>
		  <td>${marketcap.toLocaleString()}</td>
        </tr>
       
       </tbody>
		</Table>
		</Container>

		//
	);
};

export default Crypto;

/// the best solution prob is to make a grid then shrink to columns. table is not as responsive
