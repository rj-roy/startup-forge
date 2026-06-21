export default function ApplicationItem({ application, onStatusChange, onViewDetails }) {
    const getStatusBadge = (status) => {
        const styles = {
            pending: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
            approved: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
            rejected: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
        };
        return styles[status] || styles.pending;
    };

    return (
        <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200">
            <div className="flex flex-col gap-4">

                {/* Top Row: Applicant Info & Status */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
                                {application.fullName}
                            </h3>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${getStatusBadge(application.status)}`}>
                                {application.status}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Applied for <span className="font-medium text-indigo-600 dark:text-indigo-400">{application.opportunityName}</span>
                        </p>
                    </div>

                    {/* Applied Date */}
                    <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(application.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>

                {/* Middle Row: Contact Info & Cover Letter Preview */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="truncate">{application.email}</span>
                        </div>
                        {application.portfolioUrl && (
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                <a
                                    href={application.portfolioUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="truncate text-indigo-600 dark:text-indigo-400 hover:underline"
                                >
                                    {application.portfolioUrl}
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Row: Actions */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                    <button
                        onClick={onViewDetails}
                        className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                        View Full Application →
                    </button>

                    {application.status === "pending" && (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => onStatusChange(application, "rejected")}
                                className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex items-center gap-1.5"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Reject
                            </button>
                            <button
                                onClick={() => onStatusChange(application, "approved")}
                                className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors flex items-center gap-1.5"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Approve
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}