// netlify/functions/create-checkout-session.js
const Stripe = require("stripe");

// Make sure STRIPE_SECRET_KEY is set in Netlify env vars
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// SERVER-SIDE product catalog (IDs must match frontend IDs)
const PRODUCTS = {
  "winter-cozy-hoodie": {
    name: "Cozy Fleece Hoodie",
    price: 49.99,
    image: "https://seasonstyleco.netlify.app/assets/winter-hoodie.jpg",
  },
  // you can add more products here later...
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const items = body.items;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No items in cart." }),
      };
    }

    const lineItems = items.map((item) => {
      const product = PRODUCTS[item.id];

      if (!product) {
        throw new Error(`Unknown product ID: ${item.id}`);
      }

      const quantity = Number(item.quantity) || 1;

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            images: [product.image],
          },
          unit_amount: Math.round(product.price * 100), // dollars → cents
        },
        quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: "https://seasonstyleco.netlify.app/success.html",
      cancel_url: "https://seasonstyleco.netlify.app/cancel.html",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create checkout session." }),
    };
  }
};
