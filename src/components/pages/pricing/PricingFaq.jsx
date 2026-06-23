"use client";

import { useState } from "react";

export default function PricingFAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Can I switch between Founder and Collaborator accounts?",
            answer: "Yes! You can maintain both a Founder and Collaborator profile under the same email address and switch between them seamlessly."
        },
        {
            question: "Is there a free trial for paid plans?",
            answer: "Absolutely. All our paid plans come with a 14-day free trial. No credit card is required to start, and you can cancel anytime."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and bank transfers for annual Enterprise plans."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, you can cancel your subscription at any time from your dashboard. Your access will continue until the end of your current billing cycle."
        },
    ];

    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Everything you need to know about our pricing.
                </p>
            </div>

            <div className="space-y-3">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className={`rounded-2xl border transition-all duration-300 ${openIndex === idx
                                ? "bg-white dark:bg-gray-900 border-indigo-200 dark:border-indigo-800 shadow-md"
                                : "bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800"
                            }`}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                        >
                            <span className={`font-semibold transition-colors ${openIndex === idx ? "text-indigo-600 dark:text-indigo-400" : "text-gray-900 dark:text-white"
                                }`}>
                                {faq.question}
                            </span>
                            <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? "bg-indigo-100 dark:bg-indigo-900/50 rotate-180" : "bg-gray-100 dark:bg-gray-800"
                                }`}>
                                <svg className={`w-4 h-4 ${openIndex === idx ? "text-indigo-600 dark:text-indigo-400" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}>
                            <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}