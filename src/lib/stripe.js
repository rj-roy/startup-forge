import 'server-only';
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
    'founder_pro': 'price_1TmrF6DOFnAyWgmEsZE7Shv9',
};