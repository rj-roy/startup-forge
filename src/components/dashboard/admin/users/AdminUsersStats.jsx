export default function AdminUsersStats({ stats }) {
    const cards = [
        {
            label: "Total Users",
            value: stats.total,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
        },
        {
            label: "Active Users",
            value: stats.active,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
        },
        {
            label: "Blocked Users",
            value: stats.blocked,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            ),
            color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
        },
        {
            label: "Founders",
            value: stats.founders,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
        },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card, idx) => (
                <div
                    key={idx}
                    className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-200 group"
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                {card.label}
                            </p>
                            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">
                                {card.value}
                            </p>
                        </div>
                        <div className={`p-3 rounded-xl ${card.color} group-hover:scale-110 transition-transform`}>
                            {card.icon}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}