const express = require('express');
const app = express();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());

app.post('/payment', cors(), async (req,res)=> {
 let {amount, id }  = req.body
 try {
     const payment = await stripe.paymentInents.create({
         amount,
         currency: "USD",
         description: 'SeaWolf Crypto Merch',
         payment_method: id, 
         confirm: true
     })
     console.log('payment', payment)
     res.json({
         message: "Payment Successful",
         success: true
     })
 } catch (error) {
     console.log('Error',error)
     res.json({
         message: 'Payment Failed',
         success: false
     })
 }
})

app.listen(process.env.PORT || 4000, () => {
	console.log('server is listening on portt 4000');
});


//  this whole page I need to research more. 