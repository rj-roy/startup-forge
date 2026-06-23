import Link from "next/link";

export default function AdminQuickLinks() {
    const links = [
        {
            title: "Manage Users",
            description: "View, block, or unblock platform users.",
            href: "/dashboard/admin/users",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            bg: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
        },
        {
            title: "Manage Startups",
            description: "Approve or reject new startup applications.",
            href: "/dashboard/admin/startups",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            bg: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
        },
        {
            title: "View Opportunities",
            description: "Monitor all job postings across the platform.",
            href: "/dashboard/admin/opportunities",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            bg: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
        },
    ];

    return (
        <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {links.map((link, idx) => (
                    <Link
                        key={idx}
                        href={link.href}
                        className="flex items-center gap-4 p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200 group"
                    >
                        <div className={`p-3 rounded-xl ${link.bg} group-hover:scale-110 transition-transform`}>
                            {link.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                                {link.title}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                                {link.description}
                            </p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                ))}
            </div>
        </div>
    );
}