import Link from "next/link";

export default function ColStatsCards({ stats }) {
    const cards = [
        {
            label: "Total Applications",
            value: stats.total,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
            href: "/dashboard/collaborator/my-applications",
        },
        {
            label: "Pending Review",
            value: stats.pending,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
            href: "/dashboard/collaborator/my-applications",
        },
        {
            label: "Approved",
            value: stats.approved,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
            href: "/dashboard/collaborator/my-applications",
        },
        {
            label: "Rejected",
            value: stats.rejected,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
            href: "/dashboard/collaborator/my-applications",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card, idx) => (
                <Link
                    key={idx}
                    href={card.href}
                    className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200 group"
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
                </Link>
            ))}
        </div>
    );
}