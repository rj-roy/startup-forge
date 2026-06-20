import Link from "next/link";

export default function CSHeader() {
    return (
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 rounded-xl">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <Link
                    href="/dashboard/founder"
                    className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-4 transition-colors"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Dashboard
                </Link>

                <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
                        <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            Create New Startup
                        </h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Fill in the details to register your startup on the platform
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}