import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(process.env.MONGODB_DB);

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_BASE,
    secret: process.env.BETTER_AUTH_SECRET,
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: false,
                defaultValue: "founder",
            },
            plan: {
                type: "string",
                required: false,
                defaultValue: "founder_free",
            },
        },
    },
});