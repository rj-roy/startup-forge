import Image from "next/image";

export default function StItem({ startup, onStatusChange, onViewDetails }) {
    const getStatusBadge = (status) => {
        const styles = {
            pending: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
            approved: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
            rejected: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
        };
        return styles[status] || styles.pending;
    };

    return (
        <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800/50 transition-colors duration-200  border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-4">

                {/* Top Row: Logo, Name & Status */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                        <Image
                            width={200}
                            height={200}
                            src={startup.logo}
                            alt={startup.startup_name}
                            className="w-14 h-14 rounded-xl object-cover border border-gray-200 dark:border-gray-700 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 truncate">
                                    {startup.startup_name}
                                </h3>
                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${getStatusBadge(startup.status)}`}>
                                    {startup.status}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                <span className="font-medium text-indigo-600 dark:text-indigo-400">{startup.industry}</span>
                                <span className="mx-2">•</span>
                                <span>{startup.funding_stage}</span>
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                                {startup.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Middle Row: Founder & Tech Stack */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pl-0 sm:pl-18">
                    <div className="flex-1 min-w-0 space-y-1.5">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="truncate">
                                {startup.founder?.name} • {startup.founder?.title}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="truncate">{startup.founder_email || "No email"}</span>
                        </div>
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap gap-1.5">
                            {startup.tech_stack?.slice(0, 4).map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                            {startup.tech_stack?.length > 4 && (
                                <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-md">
                                    +{startup.tech_stack.length - 4}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Actions */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                    <button onClick={onViewDetails}
                        className="text-sm cursor-pointer font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                        View Full Details →
                    </button>

                    {startup.status === "pending" && (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => onStatusChange(startup, "rejected")}
                                className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex items-center gap-1.5"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Reject
                            </button>
                            <button
                                onClick={() => onStatusChange(startup, "approved")}
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