"use client";

import { useState } from "react";
import ApplicationItem from "./ApplicationsItem";
import ApplicationDeModal from "./ApplicationsDeModal";
import StatusChangeModal from "./StatusChangeModal";

export default function ApplicationsList({ applications }) {
    const [filter, setFilter] = useState("all");
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [localApplications, setLocalApplications] = useState(applications);

    // New state for status change modal
    const [statusChangeModal, setStatusChangeModal] = useState({
        isOpen: false,
        application: null,
        newStatus: null,
    });

    const handleStatusChange = (id, newStatus) => {
        setLocalApplications((prev) =>
            prev.map((app) =>
                app._id === id ? { ...app, status: newStatus } : app
            )
        );

        // Close the modal
        setStatusChangeModal({ isOpen: false, application: null, newStatus: null });

        // Also close details modal if open
        if (selectedApplication?._id === id) {
            setSelectedApplication((prev) => prev ? { ...prev, status: newStatus } : prev);
        }
    };

    // Open the confirmation modal
    const openStatusChangeModal = (application, newStatus) => {
        setStatusChangeModal({
            isOpen: true,
            application,
            newStatus,
        });
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
    };

    if (localApplications.length === 0) {
        return (
            <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400 text-lg">No applications received yet.</p>
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
            <div className="rounded-2xl space-y-5">
                {filteredApplications.length > 0 ? (
                    filteredApplications.map((app) => (
                        <ApplicationItem
                            key={app._id}
                            application={app}
                            onStatusChange={openStatusChangeModal}
                            onViewDetails={() => setSelectedApplication(app)}
                        />
                    ))
                ) : (
                    <div className="p-12 text-center text-gray-500 dark:text-gray-400">
                        No {filter} applications found.
                    </div>
                )}
            </div>

            {/* Details Modal */}
            {selectedApplication && (
                <ApplicationDeModal
                    application={selectedApplication}
                    onClose={() => setSelectedApplication(null)}
                    onStatusChange={openStatusChangeModal}
                />
            )}

            {/* Status Change Confirmation Modal */}
            {statusChangeModal.isOpen && statusChangeModal.application && (
                <StatusChangeModal
                    application={statusChangeModal.application}
                    newStatus={statusChangeModal.newStatus}
                    onClose={() => setStatusChangeModal({ isOpen: false, application: null, newStatus: null })}
                    onConfirm={(newStatus) => handleStatusChange(statusChangeModal.application._id, newStatus)}
                />
            )}
        </>
    );
}