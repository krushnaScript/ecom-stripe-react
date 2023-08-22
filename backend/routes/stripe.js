const express = require('express');
const Stripe = require('stripe');
const { Order } = require('../models/order');

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY)

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  const line_items = req.body.cardItems.map((data)=>{
    return {
      price_data: {
        currency: data?.currency?data?.currency:'usd',
        product_data: {
          name: data?.name?data?.name:'Unknown',
          images:[data?.image?data?.image:''],
          description:data?.desc?data?.desc:'',
          metadata:{
            productId:data.id
          }
        },
        unit_amount: data?.price?data?.price*100:0,
        // tax_behavior: 'exclusive',
      },
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
        maximum: 10,
      },
      quantity: data?.cartQuantity?data?.cartQuantity:1,
    }
  })
  // console.log("31",line_items)
    const session = await stripe.checkout.sessions.create({
      payment_method_types:['card'],
      customer_email:req.body.userEmail,
      client_reference_id:req.body.userId,
      // metaData:{shippingInfo},
      line_items,
      // automatic_tax: {
      //   enabled: true,
      // },
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
      shipping_options:[
        {shipping_rate:'shr_1NhXqxSE9aW056TzEvvnbawH'}
      ]
    });

    res.send({url:session?.url});
  });



   const getCartItems= async(line_items)=>{
    return new Promise((resolve,reject)=>{
        let cart_items=[];
        line_items?.data?.forEach(async (item)=>{
          const product = await stripe.products.retrieve(item.price.product);
          const productId= product.metadata.productId;

          cart_items.push({
            product:productId,
            name:product.name,
            price:item.price.unit_amount_decimal/100,
            quantity:item.quantity,
            image:product.images[0]
          })
          if(cart_items?.length ===line_items?.data?.length ){
            resolve(cart_items)
          }
        })

    })
  }

  // This is your Stripe CLI webhook secret for testing your endpoint locally.
router.post('/webhook', express.raw({type: 'application/json'}), async(request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, process.env.ENDPOINT_SECRET);
    // console.log("71",event?.type)
  // Handle the event
  if(event.type==='checkout.session.completed'){
    const session = event.data.object;
    // Then define and call a function to handle the event payment_intent.succeeded
    const line_items = await stripe.checkout.sessions.listLineItems(event.data.object.id)
    const orderItems = await getCartItems(line_items);
    const userId=session.client_reference_id;
    const amountPaid = String(session.amount_total/100);

    const paymentInfo= {
      id:session.payment_intent,
      status:session.payment_status,
      amountPaid,
      // taxPaid:session.total_details.amount_tax/100
    }

    const orderData={
      user:userId,
      // shippingInfo:session.metadata.shippingInfo,
      paymentInfo,
      orderItems,
    }
    // console.log("113",orderData)
    const order = await Order.create(orderData);
    // console.log("114",order)

    response.status(201).json({success:true})
  }
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`)
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

 
  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

module.exports = router