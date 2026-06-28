"use client";
import { useState } from "react";
import PricingHeader from "./PricingHeader";
import PricingToggles from "./PricingToggles";
import PricingTiers from "./PricingTiers";
import PricingFAQ from "./PricingFaq";
import PricingCTA from "./PricingCTA";

export default function PricingCom({ plans }) {
    const [userType, setUserType] = useState("founder");
    const filteredPlans = plans.filter(plan => plan.role === userType);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-sec-black-bg">
            <PricingHeader />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
                <div className="pt-15 space-y-13">
                    <PricingToggles userType={userType} setUserType={setUserType} />
                    <PricingTiers userType={userType} plans={filteredPlans} />
                </div>
                <PricingFAQ />
                <PricingCTA />
            </div>
        </div>
    );
}