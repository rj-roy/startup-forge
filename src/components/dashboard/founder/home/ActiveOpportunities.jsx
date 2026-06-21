import Link from "next/link";

export default function ActiveOpportunities({ opportunities }) {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        Active Opportunities
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        Your open positions
                    </p>
                </div>
                <Link
                    href="/dashboard/founder/manage-opportunities"
                    className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                    View all →
                </Link>
            </div>

            {/* List */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {opportunities.length > 0 ? (
                    opportunities.map((opp) => {
                        const daysLeft = Math.ceil(
                            (new Date(opp.deadline) - new Date()) / (1000 * 60 * 60 * 24)
                        );

                        return (
                            <div
                                key={opp._id}
                                className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate mb-1">
                                    {opp.role_title}
                                </h3>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {opp.commitment_level}
                                    </span>
                                    <span className="text-gray-300 dark:text-gray-600">•</span>
                                    <span className={`text-xs font-medium ${daysLeft < 7
                                            ? "text-red-600 dark:text-red-400"
                                            : "text-gray-600 dark:text-gray-400"
                                        }`}>
                                        {daysLeft > 0 ? `${daysLeft} days left` : "Expired"}
                                    </span>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="px-6 py-12 text-center">
                        <svg className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                            No active opportunities
                        </p>
                        <Link
                            href="/dashboard/founder/add-opportunity"
                            className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                        >
                            Post your first opportunity →
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}