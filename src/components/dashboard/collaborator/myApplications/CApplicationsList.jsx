"use client";

import { useState } from "react";
import CApplicationItem from "./CApplicationItem";
import CancelConfirmationModal from "./CancelConfirmationModal";

export default function CApplicationsList({ applications }) {
    const [filter, setFilter] = useState("all");
    const [localApplications, setLocalApplications] = useState(applications);
    const [cancelModal, setCancelModal] = useState({
        isOpen: false,
        application: null,
    });

    const handleCancel = (id) => {
        setLocalApplications((prev) =>
            prev.map((app) =>
                app._id === id ? { ...app, status: "cancelled" } : app
            )
        );
        setCancelModal({ isOpen: false, application: null });
    };

    const openCancelModal = (application) => {
        setCancelModal({ isOpen: true, application });
    };

    const filteredApplications = localApplications.filter((app) => {
        if (filter === "all") return true;
        return app.status === filter;
    });

    const counts = {
        all: localApplications.length,
        pending: localApplications.filter((a) => a.status === "pending").length,
        approved: localApplications.filter((a) => a.status === "approved").length,
        rejected: localApplications.filter((a) => a.status === "rejected").length,
        cancelled: localApplications.filter((a) => a.status === "cancelled").length,
    };

    if (localApplications.length === 0) {
        return (
            <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400 text-lg">No applications yet.</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                    Start exploring opportunities and apply to startups!
                </p>
            </div>
        );
    }

    return (
        <>
            {/* Filter Tabs */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 mb-6">
                <div className="flex items-center gap-1 p-2 overflow-x-auto">
                    {[
                        { key: "all", label: "All" },
                        { key: "pending", label: "Pending" },
                        { key: "approved", label: "Approved" },
                        { key: "rejected", label: "Rejected" },
                        { key: "cancelled", label: "Cancelled" },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setFilter(tab.key)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${filter === tab.key
                                    ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                        >
                            {tab.label}
                            <span className="ml-2 px-1.5 py-0.5 text-xs bg-gray-200 dark:bg-gray-700 rounded">
                                {counts[tab.key]}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Applications List */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden divide-y divide-gray-200 dark:divide-gray-700">
                {filteredApplications.length > 0 ? (
                    filteredApplications.map((app) => (
                        <CApplicationItem
                            key={app._id}
                            application={app}
                            onCancel={openCancelModal}
                        />
                    ))
                ) : (
                    <div className="p-12 text-center text-gray-500 dark:text-gray-400">
                        No {filter} applications found.
                    </div>
                )}
            </div>

            {/* Cancel Confirmation Modal */}
            {cancelModal.isOpen && cancelModal.application && (
                <CancelConfirmationModal
                    application={cancelModal.application}
                    onClose={() => setCancelModal({ isOpen: false, application: null })}
                    onConfirm={(id) => handleCancel(id)}
                />
            )}
        </>
    );
}