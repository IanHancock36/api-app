import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
	const [ success, setSuccess ] = uesState(false);
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const [ error, payementMethod ] = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement)
		});

		if (!error) {
			try {
				const { id } = payementMethod;
				const response = await axios.post('http//localhost:4000/payment', {
					amount: 1000,
					id
				});

				if (response.data.success) {
					console.log('Succesful Paymemnt');
					setSuccess(true);
				}
			} catch (error) {
				console.log('Error', error);
			}
		} else {
			console.log('error.message');
		}
	};

	return (
        <>
        {!success ?
        <form onSubmit={handleSubmit}>
           <fieldset className= 'FormGroup'>
               <div className='FormRow'>
                   <CardElement options={CARD_OPTIONS} />
               </div>
           </fieldset>
           <button>Pay</button>
        </form>

        : 
        <div>
            <h2> You bought a great shirt.</h2>
        </div>

        
    } 
        </>
    )

};

export default PaymentForm;
