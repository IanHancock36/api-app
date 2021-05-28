import React,{useState} from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from 'axios'

const PaymentForm = () => {
    const [success , setSuccess] = uesState(false)
    const stripe = useStripe()
    const elements = useElements()
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const [error, payementMethod] = await stripe.createPaymentMethod({
            type:'card',
            card: elements.getElement(CardElement)
    });

    }
    if(!error){
        try {
            const 
        } catch (error) {
            
        }
    }
    
    return (
        <form onSubmit ={handleSubmit} >

          
            


        </form>
        
      
    )
}

export default PaymentForm
