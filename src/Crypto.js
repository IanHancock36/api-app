import React from 'react'



const Crypto = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
}) => {
    return (
        <div className='crypto-container'>
         <div className ='crypto-row'>
          <div className='crypto'>

          </div>
          <div className='crypto-data'></div>
         </div>
            
        </div>
    )
}

export default Crypto

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

//}