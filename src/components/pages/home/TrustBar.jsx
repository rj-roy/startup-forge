export default function TrustBar() {
    const stats = [
        { value: "1,200+", label: "Active Startups" },
        { value: "5,400+", label: "Collaborators" },
        { value: "3,100+", label: "Matches Made" },
        { value: "45+", label: "Countries" },
    ];

    return (
        <div className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                                {stat.value}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}