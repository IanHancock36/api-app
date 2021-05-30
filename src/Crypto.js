import { Container, Row, Col, Table } from 'reactstrap';
import React from 'react';
import './cryptoItem.modules.css';

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
		// 				<div>
		// 					<p className="crypto-volume">${volume.toLocaleString(undefined)}</p>
		// 				</div>
		// 				<div>
		// 					<p className="crypto-marketcap">Mkt Cap : ${marketcap.toLocaleString()}</p>
		// 				</div>
		// 			</div>
		// 		</div>

		// 	);
		// };
		// Below is using React strap to make a table
		// 	<Container>
		// 	<Row >
		//     <Col><img src={image}/></Col>
		//     <Col>Name: {name}</Col>
		// 	<Col>Price: ${price}</Col>
		// 	<Col>Symbol: {symbol}</Col>
		// 	<Col>Price Change: {priceChange < 0 ? 'percent-red' : 'percent-green'}{priceChange.toLocaleString(2)}%</Col>
		// 	<Col>Volume: ${volume.toLocaleString(undefined)}</Col>
		// 	<Col>Mkt Cap : ${marketcap.toLocaleString()}</Col>
		// 	</Row>

		//   </Container>
		//
	
		<Table bordered responsive>
			<thead>
				<tr>
					<th scope ='row'></th>
					<th scope ='row'>Name</th>
					<th scope ='row'>Price</th>
					<th scope ='row'>Change</th>
					<th scope ='row'>Volume</th>
					<th scope ='row'>Mkt Cap</th>
				
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">
						<img className="cell-image" src={image} />
					</th>
					
				<td >{name} </td>
				<td > ${price} </td>	
				<td >
			
						<p className={priceChange < 0 ? 'percent-red' : 'percent-green'}>
							{priceChange.toLocaleString(2)}%
						</p>
					</td>
					{/* <td>Volume:</td> */}
					<td > ${volume.toLocaleString(undefined)}</td>
					{/* <td>Mkt Cap:</td> */}
					<td >${marketcap.toLocaleString()}</td>
				</tr>
			</tbody>
		</Table>
		
	);
};

export default Crypto;

/// the best solution prob is to make a grid then shrink to columns. table is not as responsive
