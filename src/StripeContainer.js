import { loadStripe } from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';
import React from 'react'
import PaymentForm from './PaymentForm'
const PUBLIC_KEY ="pk_test_51IiMseAjaY4VSmiPFAPHMMdlxecn3h7hBwmw7Ug1YMcScxlQ6mGFvYe6XGaS8boeT1cBxqDrnxuyjTZxVcYbbFxa00vtPHMwgv"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
    return (
     <Elements stripe ={stripeTestPromise}>
        <PaymentForm />

     </Elements>
    )
}

export default StripeContainer
