export default function AdminOppHeader() {
    return (
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 rounded-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                        All Opportunities
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Overview of all job postings across the platform.
                    </p>
                </div>
            </div>
        </div>
    );
}