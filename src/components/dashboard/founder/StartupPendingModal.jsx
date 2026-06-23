"use client";
import { redirect } from "next/navigation";
import {  useState } from "react";

export default function StartupPendingModal({ isOpen,  startupName, }) {
    const [isDismissed, setIsDismissed] = useState(false);
    const handleClose = () => {
        setIsDismissed(true);
        redirect("/dashboard/founder");
    };

    if (!isOpen || isDismissed) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={handleClose} />

            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-700 transform transition-all scale-100">

                <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                        <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                            Startup Under Review
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Your startup, <span className="font-semibold text-gray-900 dark:text-gray-200">{startupName}</span>, is currently pending approval from our admin team.
                        </p>
                    </div>
                </div>

                <div className="mt-5 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl">
                    <div className="flex gap-3">
                        <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-sm text-blue-800 dark:text-blue-300">
                            <p className="font-medium mb-1">What happens next?</p>
                            <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-400">
                                <li>Our team will review your startup details.</li>
                                <li>This process usually takes 24-48 hours.</li>
                                <li>You&apos;ll receive an email notification once approved.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className="mt-6">
                    <button type="button"
                        onClick={handleClose}
                        className="w-full px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Understood
                    </button>
                </div>
            </div>
        </div>
    );
}