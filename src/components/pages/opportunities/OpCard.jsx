export default function OpCard({ opportunity, onApply }) {
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

    const daysRemaining = Math.ceil(
        (new Date(opportunity.deadline) - new Date()) / (1000 * 60 * 60 * 24)
    );

    return (
        <div className="p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 border border-gray-200 dark:border-gray-700 rounded-xl">
            <div className="flex flex-col gap-4">

                {/* Top Row: Company Info & Deadline */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                                {opportunity.industry_name}
                            </span>
                            <span className="text-gray-300 dark:text-gray-600">•</span>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${daysRemaining < 7
                                ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                                }`}>
                                {daysRemaining > 0 ? `${daysRemaining} days left` : "Expired"}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 truncate">
                            {opportunity.role_title}
                        </h3>
                    </div>

                    {/* Deadline - visible on sm+ */}
                    <div className="hidden sm:flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(opportunity.deadline).toLocaleDateString()}</span>
                    </div>
                </div>

                {/* Middle Row: Skills & Tags */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    {/* Skills */}
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap gap-1.5">
                            {opportunity?.required_skills?.slice(0, 5).map((skill, idx) => (
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

                    {/* Work Type & Commitment */}
                    <div className="flex items-center gap-2 flex-wrap">
                        <div className="flex flex-wrap gap-1.5">
                            {opportunity.work_type.map((type, idx) => (
                                <span
                                    key={idx}
                                    className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-md border border-blue-100 dark:border-blue-900/50"
                                >
                                    {type}
                                </span>
                            ))}
                        </div>
                        <span className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap ${getCommitmentColor(opportunity.commitment_level)}`}>
                            {opportunity.commitment_level}
                        </span>
                    </div>
                </div>

                {/* Bottom Row: Apply Button */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                    <div>
                        No Details Provided yet
                    </div>
                    <button
                        onClick={onApply}
                        className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                        Apply Now
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}