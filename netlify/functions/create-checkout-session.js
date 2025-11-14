// netlify/functions/create-checkout-session.js
import Stripe from "stripe";

// Make sure STRIPE_SECRET_KEY is set in Netlify env vars
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20", // or latest your Stripe account supports
});

// SERVER-SIDE product catalog (IDs must match frontend)
const PRODUCTS = {
  "winter-cozy-hoodie": {
    name: "Cozy Fleece Hoodie",
    price: 49.99,
    image: "https://YOUR-DOMAIN.com/assets/winter-hoodie.jpg",
  },
  "winter-beanie-set": {
    name: "Thermal Beanie & Gloves Set",
    price: 24.99,
    image: "https://YOUR-DOMAIN.com/assets/winter-beanie.jpg",
  },
  "winter-led-lights": {
    name: "Warm LED Room Lights",
    price: 19.99,
    image: "https://YOUR-DOMAIN.com/assets/winter-lights.jpg",
  },
  "winter-mug-warmer": {
    name: "USB Mug Warmer",
    price: 17.99,
    image: "https://YOUR-DOMAIN.com/assets/winter-mug-warmer.jpg",
  },

  "spring-crewneck": {
    name: "Pastel Oversized Crewneck",
    price: 39.99,
    image: "https://YOUR-DOMAIN.com/assets/spring-crewneck.jpg",
  },
  "spring-desk-plant": {
    name: "Minimal Desk Plant (Artificial)",
    price: 14.99,
    image: "https://YOUR-DOMAIN.com/assets/spring-plant.jpg",
  },

  "summer-graphic-tee": {
    name: "Oversized Graphic Tee",
    price: 29.99,
    image: "https://YOUR-DOMAIN.com/assets/summer-tee.jpg",
  },
  "summer-portable-fan": {
    name: "Rechargeable Portable Fan",
    price: 21.99,
    image: "https://YOUR-DOMAIN.com/assets/summer-fan.jpg",
  },

  "fall-flannel": {
    name: "Soft Plaid Flannel",
    price: 44.99,
    image: "https://YOUR-DOMAIN.com/assets/fall-flannel.jpg",
  },
  "fall-candle-set": {
    name: "Cozy Scent Candle Set",
    price: 26.99,
    image: "https://YOUR-DOMAIN.com/assets/fall-candles.jpg",
  },
};

export async function handler(event) {
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

    // Build Stripe line items from server-side product data
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
      success_url: "seasonstyleco.netlify.app/success.html",
      cancel_url: "seasonstyleco.netlify.app/cancel.html",
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
}
