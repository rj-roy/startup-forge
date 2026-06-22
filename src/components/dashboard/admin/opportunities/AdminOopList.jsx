"use client";
import { useState, useMemo } from "react";
import AdminOppCard from "./AdminOopCard";

export default function AdminOppList({ opportunities }) {
    const OPPS_PER_PAGE = 10;
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Filter opportunities
    const filteredOpportunities = useMemo(() => {
        return opportunities.filter((opp) => {
            const isExpired = new Date(opp.deadline) <= new Date();

            // Apply status filter
            if (filter === "active" && isExpired) return false;
            if (filter === "expired" && !isExpired) return false;

            // Apply search
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase();
                return (
                    opp.role_title?.toLowerCase().includes(query) ||
                    opp.startup_name?.toLowerCase().includes(query) ||
                    opp.commitment_level?.toLowerCase().includes(query) ||
                    opp.required_skills?.some(skill => skill.toLowerCase().includes(query))
                );
            }

            return true;
        });
    }, [opportunities, filter, searchQuery]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredOpportunities.length / OPPS_PER_PAGE);
    const paginatedOpportunities = filteredOpportunities.slice(
        (currentPage - 1) * OPPS_PER_PAGE,
        currentPage * OPPS_PER_PAGE
    );

    const startIndex = (currentPage - 1) * OPPS_PER_PAGE + 1;
    const endIndex = Math.min(currentPage * OPPS_PER_PAGE, filteredOpportunities.length);

    // Reset to page 1 when filter or search changes
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setCurrentPage(1);
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Show first page, last page, current page, and neighbors
            let startPage = Math.max(1, currentPage - 1);
            let endPage = Math.min(totalPages, currentPage + 1);

            if (currentPage === 1) {
                endPage = Math.min(totalPages, 3);
            } else if (currentPage === totalPages) {
                startPage = Math.max(1, totalPages - 2);
            }

            if (startPage > 1) {
                pages.push(1);
                if (startPage > 2) pages.push("...");
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) pages.push("...");
                pages.push(totalPages);
            }
        }

        return pages;
    };

    const counts = {
        all: opportunities.length,
        active: opportunities.filter((opp) => new Date(opp.deadline) > new Date()).length,
        expired: opportunities.filter((opp) => new Date(opp.deadline) <= new Date()).length,
    };

    return (
        <div className="space-y-6">
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
                        placeholder="Search by role, startup, skills, or commitment..."
                        className="w-full pl-11 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto">
                    {[
                        { key: "all", label: "All" },
                        { key: "active", label: "Active" },
                        { key: "expired", label: "Expired" },
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
                    {filteredOpportunities.length > 0 ? (
                        <>
                            Showing <span className="font-medium text-gray-900 dark:text-gray-100">{startIndex}</span> to <span className="font-medium text-gray-900 dark:text-gray-100">{endIndex}</span> of <span className="font-medium text-gray-900 dark:text-gray-100">{filteredOpportunities.length}</span> opportunities
                        </>
                    ) : (
                        "No opportunities found"
                    )}
                </p>
            </div>

            {/* Opportunities Grid */}
            {paginatedOpportunities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                    {paginatedOpportunities.map((opp) => (
                        <AdminOppCard key={opp._id} opportunity={opp} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">No opportunities found.</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Try adjusting your search or filter.</p>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                    {/* Page Info */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Page <span className="font-medium text-gray-900 dark:text-gray-100">{currentPage}</span> of <span className="font-medium text-gray-900 dark:text-gray-100">{totalPages}</span>
                    </p>

                    {/* Pagination Controls */}
                    <div className="flex items-center gap-2">
                        {/* Previous Button */}
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="hidden sm:inline">Previous</span>
                        </button>

                        {/* Page Numbers */}
                        <div className="flex items-center gap-1">
                            {getPageNumbers().map((page, idx) => (
                                page === "..." ? (
                                    <span key={`ellipsis-${idx}`} className="px-2 py-2 text-sm text-gray-500 dark:text-gray-400">
                                        ...
                                    </span>
                                ) : (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`min-w-9 h-9 px-3 text-sm font-medium rounded-lg transition-colors ${currentPage === page
                                                ? "bg-indigo-600 text-white shadow-sm"
                                                : "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                )
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
                        >
                            <span className="hidden sm:inline">Next</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}