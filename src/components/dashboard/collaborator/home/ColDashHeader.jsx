export default function ColDashHeader({ userName }) {
    const today = new Date();
    const greeting = today.getHours() < 12
        ? "Good morning"
        : today.getHours() < 18
            ? "Good afternoon"
            : "Good evening";

    return (
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 rounded-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {greeting}, {userName} 👋
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Ready to find your next opportunity?
                    </p>
                </div>
            </div>
        </div>
    );
}