export default function AdminOppCard({ opportunity }) {
    const isExpired = new Date(opportunity.deadline) <= new Date();
    const daysRemaining = Math.ceil(
        (new Date(opportunity.deadline) - new Date()) / (1000 * 60 * 60 * 24)
    );

    const getCommitmentColor = (level) => {
        const colors = {
            "Full-time": "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
            "Part-time": "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
            "Contract": "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
            "Freelance": "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
            "Internship": "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
        };
        return colors[level] || "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300";
    };

    return (
        <div className={`bg-white dark:bg-gray-900 rounded-2xl border p-6 hover:shadow-lg transition-all duration-200 flex flex-col ${isExpired
                ? "border-gray-300 dark:border-gray-700 opacity-75"
                : "border-gray-200 dark:border-gray-700"
            }`}>

            {/* Header: Startup & Status */}
            <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {opportunity.startup_name}
                </span>
                <span className={`text-xs font-medium px-2 py-1 rounded-md ${isExpired
                        ? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        : daysRemaining < 7
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    }`}>
                    {isExpired ? "Expired" : `${daysRemaining} days left`}
                </span>
            </div>

            {/* Role Title */}
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 line-clamp-2">
                {opportunity.role_title}
            </h3>

            {/* Tags: Work Type & Commitment */}
            <div className="flex flex-wrap gap-2 mb-4">
                {opportunity.work_type.map((type, idx) => (
                    <span
                        key={idx}
                        className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-md border border-blue-100 dark:border-blue-900/50"
                    >
                        {type}
                    </span>
                ))}
                <span className={`px-2.5 py-1 text-xs font-medium rounded-md ${getCommitmentColor(opportunity.commitment_level)}`}>
                    {opportunity.commitment_level}
                </span>
            </div>

            {/* Skills */}
            <div className="flex-1 mb-4">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Required Skills
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {opportunity.required_skills.slice(0, 5).map((skill, idx) => (
                        <span
                            key={idx}
                            className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md"
                        >
                            {skill}
                        </span>
                    ))}
                    {opportunity.required_skills.length > 5 && (
                        <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-md">
                            +{opportunity.required_skills.length - 5} more
                        </span>
                    )}
                </div>
            </div>

            {/* Footer: Deadline */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Deadline: {new Date(opportunity.deadline).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}