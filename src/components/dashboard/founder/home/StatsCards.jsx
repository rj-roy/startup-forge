import Link from "next/link";

export default function StatsCards({ stats }) {
    const cards = [
        {
            label: "Total Opportunities",
            value: stats.totalOpportunities,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
            href: "/dashboard/founder/opportunities",
        },
        {
            label: "Active Opportunities",
            value: stats.activeOpportunities,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
            href: "/dashboard/founder/opportunities",
        },
        {
            label: "Total Applications",
            value: stats.totalApplications,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
            href: "/dashboard/founder/applications",
        },
        {
            label: "Pending Review",
            value: stats.pendingApplications,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
            href: "/dashboard/founder/applications",
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