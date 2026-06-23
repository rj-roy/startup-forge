import Link from "next/link";

export default function ColQuickActions() {
    const actions = [
        {
            label: "Browse Opportunities",
            description: "Find new roles to apply for",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            href: "/opportunities",
            variant: "primary",
        },
        {
            label: "My Applications",
            description: "Track your application status",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
            href: "/dashboard/collaborator/my-applications",
            variant: "secondary",
        },
        {
            label: "Edit Profile",
            description: "Update your information",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            href: "/dashboard/collaborator/profile",
            variant: "secondary",
        },
    ];

    return (
        <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {actions.map((action, idx) => (
                    <Link
                        key={idx}
                        href={action.href}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${
                            action.variant === "primary"
                                ? "bg-indigo-600 hover:bg-indigo-700 border-indigo-600 text-white"
                                : "bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                        }`}
                    >
                        <div className={`p-2.5 rounded-lg ${
                            action.variant === "primary"
                                ? "bg-white/20"
                                : "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                        }`}>
                            {action.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold truncate">{action.label}</p>
                            <p className={`text-xs truncate ${
                                action.variant === "primary"
                                    ? "text-indigo-100"
                                    : "text-gray-500 dark:text-gray-400"
                            }`}>
                                {action.description}
                            </p>
                        </div>
                        <svg className="w-5 h-5 flex-shrink-0 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                ))}
            </div>
        </div>
    );
}