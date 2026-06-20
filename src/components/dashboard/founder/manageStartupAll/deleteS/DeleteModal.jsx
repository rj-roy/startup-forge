'use client'
import { deleteStartupAction } from "@/lib/actions/deleteStartupAction";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteModal({ isOpen, onClose, startupId, startupName }) {
    const router = useRouter();
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState(null);

    if (!isOpen) return null;

    const handleDelete = async () => {
        setDeleting(true);
        setError(null);

        try {
            await deleteStartupAction(startupId);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            onClose();
            router.push("/dashboard/founder");
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setDeleting(false);
        };
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={!deleting ? onClose : undefined}
            />

            {/* Modal */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-700">

                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="shrink-0 p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                        <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                            Delete {startupName}?
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            This action cannot be undone. All data, team members, and applications
                            associated with this startup will be permanently removed.
                        </p>
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <div className="mt-4 flex items-start gap-2 px-3 py-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
                    </div>
                )}

                {/* Actions */}
                <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={deleting}
                        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={deleting}
                        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors flex items-center gap-2"
                    >
                        {deleting ? (
                            <>
                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Deleting...
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Yes, Delete
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}