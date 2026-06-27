import Link from "next/link";

export default function PricingTiers({ userType }) {
    const plans = userType === "founder"
        ? [
            {
                name: "Starter",
                price: 0,
                period: "forever",
                description: "Perfect for validating your idea.",
                features: ["1 Startup Profile", "Post 3 Opportunities", "Basic Analytics", "Community Support"],
                cta: "Get Started",
                action: "/auth/signup?plan=free",
                popular: false
            },
            {
                name: "Founder Pro",
                id: "founder_pro",
                price: 29,
                period: "month",
                description: "For startups ready to scale hiring.",
                features: ["3 Startup Profiles", "Unlimited Opportunities", "Advanced Analytics", "Priority Support", "Custom Branding"],
                cta: "Start with Pro",
                action: "/api/checkout_session",
                popular: true
            },
            {
                name: "Scale",
                id: "scale",
                price: 79,
                period: "month",
                description: "For established companies.",
                features: ["Unlimited Profiles", "Unlimited Opportunities", "Dedicated Account Manager", "API Access", "SSO & Advanced Security", "Team Collaboration"],
                cta: "Contact Sales",
                action: "/contact",
                popular: false
            }
        ]
        : [
            {
                name: "Explorer",
                id: "explorer",
                price: 0,
                period: "forever",
                description: "Start your journey with us.",
                features: ["Create Profile", "Apply to 5 Jobs/Month", "Basic Profile Visibility", "Email Alerts"],
                cta: "Get Started",
                action: "/auth/signup?plan=free",
                popular: false
            },
            {
                name: "Pro",
                id: "pro",
                price: 9,
                period: "month",
                description: "Get noticed by top founders.",
                features: ["Unlimited Applications", "Featured Profile Badge", "Direct Messaging", "Advanced Analytics", "Priority Support"],
                cta: "Go Pro",
                action: "/auth/signup?plan=pro",
                popular: true
            },
            {
                name: "Elite",
                id: "elite",
                price: 19,
                period: "month",
                description: "Maximum visibility and perks.",
                features: ["Everything in Pro", "Top of Search Results", "Verified Skill Badges", "1-on-1 Career Coaching", "Exclusive Job Board Access"],
                cta: "Go Elite",
                action: "/auth/signup?plan=elite",
                popular: false
            }
        ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
                <div
                    key={idx}
                    className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${plan.popular
                        ? "bg-white dark:bg-gray-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/10 scale-105 z-10"
                        : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl"
                        }`}
                >
                    {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <span className="bg-linear-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider text-nowrap">
                                Most Popular
                            </span>
                        </div>
                    )}

                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            {plan.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 h-10">
                            {plan.description}
                        </p>
                    </div>

                    <div className="mb-8 flex items-baseline gap-1">
                        <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                            ${plan.price}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 font-medium">
                            /{plan.period}
                        </span>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                        {plan.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3">
                                <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                                    <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <form action={plan.action} method="POST">
                        <input type="hidden" name="plan_id" value={plan.id} />
                        <button
                            className={`cursor-pointer w-full py-3.5 px-4 rounded-xl text-center font-semibold transition-all duration-200 ${plan.popular
                                ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
                                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                                }`}
                        >
                            {plan.cta}
                        </button>
                    </form>
                </div>
            ))}
        </div>
    );
}