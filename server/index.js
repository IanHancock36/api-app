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
     
 } catch (error) {
     
 }
})

app.listen(process.env.PORT || 4000, () => {
	console.log('server is listening on portt 4000');
});
