import Link from "next/link";

export default function QuickActions() {
    const actions = [
        {
            label: "Post New Opportunity",
            description: "Create a new job posting",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            ),
            href: "/dashboard/founder/add-opportunity",
            variant: "primary",
        },
        {
            label: "Manage Startup",
            description: "Update your startup profile",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            ),
            href: "/dashboard/founder/manage-startup",
            variant: "secondary",
        },
        {
            label: "View All Applications",
            description: "Review pending applications",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
            href: "/dashboard/founder/applications",
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
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${action.variant === "primary"
                                ? "bg-indigo-600 hover:bg-indigo-700 border-indigo-600 text-white"
                                : "bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
                            }`}
                    >
                        <div className={`p-2.5 rounded-lg ${action.variant === "primary"
                                ? "bg-white/20"
                                : "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                            }`}>
                            {action.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold truncate">{action.label}</p>
                            <p className={`text-xs truncate ${action.variant === "primary"
                                    ? "text-indigo-100"
                                    : "text-gray-500 dark:text-gray-400"
                                }`}>
                                {action.description}
                            </p>
                        </div>
                        <svg className="w-5 h-5 shrink-0 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                ))}
            </div>
        </div>
    );
}