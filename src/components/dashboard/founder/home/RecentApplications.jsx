import Link from "next/link";

export default function RecentApplications({ applications }) {
    const getStatusBadge = (status) => {
        const styles = {
            pending: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
            approved: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
            rejected: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
        };
        return styles[status] || styles.pending;
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        Recent Applications
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        Latest applications from candidates
                    </p>
                </div>
                <Link
                    href="/dashboard/founder/applications"
                    className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                    View all →
                </Link>
            </div>

            {/* List */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {applications.length > 0 ? (
                    applications.map((app) => (
                        <div
                            key={app._id}
                            className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                                            {app.fullName.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                                                {app.fullName}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                                for {app.opportunityName}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 shrink-0">
                                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${getStatusBadge(app.status)}`}>
                                        {app.status}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                                        {new Date(app.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="px-6 py-12 text-center">
                        <svg className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            No applications yet
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}