"use client";

import { useState } from "react";
import StChangeModal from "./StChangModal";
import StDetailsModal from "./StDetailsModal";
import StItem from "./StItem";

export default function StList({ startups }) {
    const [filter, setFilter] = useState("all");
    const [selectedStartup, setSelectedStartup] = useState(null);
    const [localStartups, setLocalStartups] = useState(startups);

    const [statusChangeModal, setStatusChangeModal] = useState({
        isOpen: false,
        startup: null,
        newStatus: null,
    });

    const handleStatusChange = (id, newStatus) => {
        setLocalStartups((prev) =>
            prev.map((s) =>
                s._id === id ? { ...s, status: newStatus } : s
            )
        );
        setStatusChangeModal({ isOpen: false, startup: null, newStatus: null });

        if (selectedStartup?._id === id) {
            setSelectedStartup((prev) => prev ? { ...prev, status: newStatus } : prev);
        }
    };

    const openStatusChangeModal = (startup, newStatus) => {
        setStatusChangeModal({
            isOpen: true,
            startup,
            newStatus,
        });
    };

    const filteredStartups = localStartups.filter((s) => {
        if (filter === "all") return true;
        return s.status === filter;
    });

    const counts = {
        all: localStartups.length,
        pending: localStartups.filter((s) => s.status === "pending").length,
        approved: localStartups.filter((s) => s.status === "approved").length,
        rejected: localStartups.filter((s) => s.status === "rejected").length,
    };

    if (localStartups.length === 0) {
        return (
            <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400 text-lg">No startups found.</p>
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

            {/* Startups List */}
            <div className="rounded-2xl space-y-5">
                {filteredStartups.length > 0 ? (
                    filteredStartups.map((startup) => (
                        <StItem
                            key={startup._id}
                            startup={startup}
                            onStatusChange={openStatusChangeModal}
                            onViewDetails={() => setSelectedStartup(startup)}
                        />
                    ))
                ) : (
                    <div className="p-12 text-center text-gray-500 dark:text-gray-400">
                        No {filter} startups found.
                    </div>
                )}
            </div>

            {/* Details Modal */}
            {selectedStartup && (
                <StDetailsModal
                    startup={selectedStartup}
                    onClose={() => setSelectedStartup(null)}
                    onStatusChange={openStatusChangeModal}
                />
            )}

            {statusChangeModal.isOpen && statusChangeModal.startup && (
                <StChangeModal
                    startup={statusChangeModal.startup}
                    newStatus={statusChangeModal.newStatus}
                    onClose={() => setStatusChangeModal({ isOpen: false, startup: null, newStatus: null })}
                    onConfirm={(newStatus) => handleStatusChange(statusChangeModal.startup._id, newStatus)}
                />
            )}
        </>
    );
}