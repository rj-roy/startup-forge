import { stripe } from '../../../lib/stripe'
import { PLAN_PRICE_ID } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const formData = await request.formData()
        const planId = formData.get('plan_id')
        const priceId = PLAN_PRICE_ID[planId];

        const headersList = await headers()
        const origin = headersList.get('origin')

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            metadata: {
                planId: planId,
            },
            success_url: `${origin}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
        });
        return NextResponse.redirect(session.url, 303)
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        );
    };
};