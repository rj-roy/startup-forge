"use client";
import { useState, useMemo } from "react";
import AdminUserCard from "./AdminUserCard";
import BlockConfirmationModal from "./BlockConfirmationModal";

const USERS_PER_PAGE = 12;

export default function AdminUsersList({ users }) {
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [blockModal, setBlockModal] = useState({
        isOpen: false,
        user: null,
        action: null, 
    });
    const [localUsers, setLocalUsers] = useState(users);

    const filteredUsers = useMemo(() => {
        let result = localUsers;

        if (filter === "active") {
            result = result.filter((u) => u.status !== "blocked");
        } else if (filter === "blocked") {
            result = result.filter((u) => u.status === "blocked");
        }

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter((u) =>
                u.name?.toLowerCase().includes(query) ||
                u.email?.toLowerCase().includes(query) ||
                (u.status === "blocked" && "blocked".includes(query)) ||
                (u.status !== "blocked" && "active".includes(query))
            );
        }

        return result;
    }, [localUsers, filter, searchQuery]);

    const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * USERS_PER_PAGE,
        currentPage * USERS_PER_PAGE
    );

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setCurrentPage(1);
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const handleStatusChange = (userId, newStatus) => {
        setLocalUsers((prev) =>
            prev.map((u) =>
                u._id === userId ? { ...u, status: newStatus } : u
            )
        );
        setBlockModal({ isOpen: false, user: null, action: null });
    };

    const openBlockModal = (user, action) => {
        setBlockModal({ isOpen: true, user, action });
    };

    const counts = {
        all: localUsers.length,
        active: localUsers.filter((u) => u.status !== "blocked").length,
        blocked: localUsers.filter((u) => u.status === "blocked").length,
    };

    return (
        <>
            {/* Search & Filter Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 space-y-4">
                {/* Search Bar */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        placeholder="Search by name, email, or status..."
                        className="w-full pl-11 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto">
                    {[
                        { key: "all", label: "All Users" },
                        { key: "active", label: "Active" },
                        { key: "blocked", label: "Blocked" },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => handleFilterChange(tab.key)}
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

            {/* Results Count */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Showing {paginatedUsers.length} of {filteredUsers.length} users
                </p>
            </div>

            {/* Users Grid */}
            {paginatedUsers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {paginatedUsers.map((user) => (
                        <AdminUserCard
                            key={user._id}
                            user={user}
                            onBlock={() => openBlockModal(user, "block")}
                            onUnblock={() => openBlockModal(user, "unblock")}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">No users found.</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Try adjusting your search or filter.</p>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-4">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Previous
                    </button>

                    <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${currentPage === page
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Next
                    </button>
                </div>
            )}

            {blockModal.isOpen && blockModal.user && (
                <BlockConfirmationModal
                    user={blockModal.user}
                    action={blockModal.action}
                    onClose={() => setBlockModal({ isOpen: false, user: null, action: null })}
                    onConfirm={(newStatus) => handleStatusChange(blockModal.user._id, newStatus)}
                />
            )}
        </>
    );
}