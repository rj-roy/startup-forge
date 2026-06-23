import Image from "next/image";
import Link from "next/link";

export default function AdminRecentPending({ startups }) {
    if (startups.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 text-center">
                <div className="w-12 h-12 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">All caught up!</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">No pending startup approvals right now.</p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        Pending Startup Approvals
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        {startups.length} startup{startups.length !== 1 ? 's' : ''} waiting for review
                    </p>
                </div>
                <Link
                    href="/dashboard/admin/startups"
                    className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                    View all →
                </Link>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {startups.map((startup) => (
                    <div key={startup._id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <Image
                                    width={200}
                                    height={200}
                                    src={startup.logo}
                                    alt={startup.startup_name}
                                    className="w-10 h-10 rounded-lg object-cover border border-gray-200 dark:border-gray-700 shrink-0"
                                />
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                                        {startup.startup_name}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                        {startup.industry} • {startup.founder?.name}
                                    </p>
                                </div>
                            </div>
                            <Link
                                href="/admin/startups"
                                className="px-3 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors whitespace-nowrap"
                            >
                                Review
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}