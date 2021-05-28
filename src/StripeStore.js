import React,{useState} from 'react'
import StripeContainer from './StripeContainer'
const StripeStore = () => {
    const[showItem, setShowItem]= useState(false)

    return (
       
       
       <div className='the store'>
        <h1>The Store</h1> 
        {showItem ?  <StripeContainer/> :  <h3>$10.00</h3> }
      <button onClick = {() => setShowItem(true)}> Purchase Product </button>
      </div>
    )
}

export default StripeStore
