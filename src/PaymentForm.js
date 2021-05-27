import React from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const stripe = useStripe(); 
    const elements = useElements; 
    return (
        <form onSubmit = {handleSubmit}> 
        <CardElement />
        <button type ='submit' disabled ={!stripe}>
            Pay Now
        </button>

        </form>
    )
}

export default PaymentForm
