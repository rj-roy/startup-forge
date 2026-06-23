export default function CApplicationItem({ application, onCancel }) {
    const getStatusBadge = (status) => {
        const styles = {
            pending: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
            approved: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
            rejected: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
            cancelled: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
        };
        return styles[status] || styles.pending;
    };

    return (
        <div className="p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200">
            <div className="flex flex-col gap-4">
                
                {/* Top Row: Opportunity & Status */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 truncate">
                                {application.opportunityName}
                            </h3>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${getStatusBadge(application.status)}`}>
                                {application.status}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Applied on <span className="font-medium">{new Date(application.createdAt).toLocaleDateString()}</span>
                        </p>
                    </div>
                </div>

                {/* Middle Row: Cover Letter Preview */}
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 italic">
                        {application.coverLetter}
                    </p>
                </div>

                {/* Bottom Row: Actions */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="truncate">{application.email}</span>
                    </div>

                    {application.status === "pending" && (
                        <button
                            onClick={() => onCancel(application)}
                            className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex items-center gap-1.5"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Cancel Application
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}