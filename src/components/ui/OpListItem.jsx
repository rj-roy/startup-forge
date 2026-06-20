import { Trash2 } from "lucide-react";
import DeleteComponent from "../actions/deleteS/DeleteComponent";

export default function OpListItem({ opportunity, onEdit }) {
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
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200">
            <div className="flex items-center justify-between gap-6">
                {/* Left: Role Title & Skills */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 truncate">
                            {opportunity.role_title}
                        </h3>
                        <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${getCommitmentColor(opportunity.commitment_level)}`}>
                            {opportunity.commitment_level}
                        </span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5">
                        {opportunity.required_skills.map((skill, idx) => (
                            <span
                                key={idx}
                                className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Middle: Work Type & Deadline */}
                <div className="flex items-center gap-8">
                    {/* Work Types */}
                    <div className="flex flex-wrap gap-1.5">
                        {opportunity.work_type.map((type, idx) => (
                            <span
                                key={idx}
                                className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-md"
                            >
                                {type}
                            </span>
                        ))}
                    </div>

                    {/* Deadline */}
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(opportunity.deadline).toLocaleDateString()}</span>
                    </div>
                </div>

                {/* Right: Edit Button */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onEdit(opportunity)}
                        className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors"
                        title="Edit"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>
                    <DeleteComponent id={opportunity._id} name={opportunity.role_title} path={'/api/opportunities/delete'} revPath={'/dashboard/founder/manage-opportunities'} />
                </div>
            </div>
        </div>
    );
}