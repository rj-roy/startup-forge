import 'server-only';
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
    'founder_pro': 'price_1TmzFFDOFnAyWgmExxzfAXLx',
    'founder_scale': 'price_1TmzAqDOFnAyWgmEUl8hGClV',
    'collaborator_pro': 'price_1TmzJ6DOFnAyWgmEZgTg7Hdn',
    'collaborator_elite': 'price_1TmzKEDOFnAyWgmEmAbBPJoA'
};