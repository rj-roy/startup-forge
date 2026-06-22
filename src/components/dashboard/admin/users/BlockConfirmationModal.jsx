"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function BlockConfirmationModal({ user, action, onClose, onConfirm }) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);
    const isBlock = action === "block";
    const title = isBlock ? "Block User?" : "Unblock User?";

    const message = isBlock
        ? `You are about to block "${user.name}". This user will no longer be able to access their account or perform any actions on the platform.`
        : `You are about to unblock "${user.name}". They will regain full access to their account.`;

    const iconColor = isBlock
        ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
        : "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400";

    const buttonColor = isBlock
        ? "bg-red-600 hover:bg-red-700 text-white"
        : "bg-green-600 hover:bg-green-700 text-white";

    const handleConfirm = async () => {
        setIsProcessing(true);
        setError(null);

        try {
            // let result;
            // if (isBlock) {
            //     result = await blockUser(user._id);
            // } else {
            //     result = await unblockUser(user._id);
            // }

            // if (result?.success === false) {
            //     throw new Error(result.message || "Failed to update user status");
            // }
            
            toast.success(`User ${isBlock ? "blocked" : "unblocked"} successfully`);
            onConfirm(isBlock ? "blocked" : "active");
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={!isProcessing ? onClose : undefined}
            />

            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                    <div className={`shrink-0 p-3 rounded-full ${iconColor}`}>
                        {isBlock ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )}
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                            {title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {message}
                        </p>
                    </div>
                </div>

                {error && (
                    <div className="mt-4 flex items-start gap-2 px-3 py-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
                    </div>
                )}

                <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isProcessing}
                        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleConfirm}
                        disabled={isProcessing}
                        className={`px-4 py-2 text-sm font-medium rounded-lg disabled:opacity-50 transition-colors flex items-center gap-2 ${buttonColor}`}
                    >
                        {isProcessing ? (
                            <>
                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : isBlock ? (
                            <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                                Yes, Block User
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Yes, Unblock User
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}