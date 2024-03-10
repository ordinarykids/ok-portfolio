import { json } from "@sveltejs/kit";
import Stripe from "stripe";
import { SECRET_STRIPE_KEY } from "$env/static/private";

const stripe = new Stripe(SECRET_STRIPE_KEY);

export async function POST() {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return json({
    clientSecret: paymentIntent.client_secret,
  });
}
