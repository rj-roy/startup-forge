'use client'
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const workTypes = ["Remote", "On-site", "Hybrid"];
const commitmentLevels = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"];

const emptyOpportunity = {
    role_title: "",
    required_skills: [],
    work_type: [],
    commitment_level: "",
    deadline: "",
    founder_id: ""
};

export default function AOForm({ data, onChange, errors = {}, startupName, startupId }) {
    const [skillInput, setSkillInput] = useState("");
    const { data: session } = authClient.useSession();

    const updateField = (field, value) => {
        const newData = {
            ...data, [field]: value,
            'founder_id': session?.user?.id,
            'industry_id': startupId,
            'industry_name': startupName
        };
        onChange(newData);
    };

    const toggleWorkType = (type) => {
        const currentTypes = data.work_type || [];
        const newTypes = currentTypes.includes(type)
            ? currentTypes.filter((t) => t !== type)
            : [...currentTypes, type];

        onChange({ ...data, work_type: newTypes });
    };

    const addSkill = (value) => {
        const trimmed = value.trim();
        if (trimmed && !data.required_skills.includes(trimmed)) {
            const newData = { ...data, required_skills: [...data.required_skills, trimmed] };
            onChange(newData);
            setSkillInput("");
        };
    };

    const removeSkill = (index) => {
        const newData = {
            ...data,
            required_skills: data.required_skills.filter((_, i) => i !== index)
        };
        onChange(newData);
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Role Title <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={data.role_title}
                    onChange={(e) => updateField("role_title", e.target.value)}
                    placeholder="e.g. Senior Frontend Developer"
                    className={`w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.role_title ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                />
                {errors.role_title && (
                    <p className="mt-1 text-xs text-red-500">{errors.role_title}</p>
                )}
            </div>

            {/* Required Skills */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Required Skills <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                    {data.required_skills.map((skill, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                        >
                            {skill}
                            <button
                                type="button"
                                onClick={() => removeSkill(index)}
                                className="hover:bg-indigo-200 dark:hover:bg-indigo-800 rounded-full p-0.5 transition-colors"
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </span>
                    ))}
                </div>
                <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            addSkill(skillInput);
                        }
                    }}
                    placeholder="Type a skill and press Enter to add..."
                    className={`w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.required_skills ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                />
                {errors.required_skills && (
                    <p className="mt-1 text-xs text-red-500">{errors.required_skills}</p>
                )}
            </div>

            {/* Work Type & Commitment Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Work Type <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {workTypes.map((type) => {
                            const isSelected = data.work_type.includes(type);
                            return (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => toggleWorkType(type)}
                                    className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 ${isSelected
                                        ? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
                                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                                        }`}
                                >
                                    {type}
                                </button>
                            );
                        })}
                    </div>
                    {errors.work_type && (
                        <p className="mt-1 text-xs text-red-500">{errors.work_type}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Commitment Level <span className="text-red-500">*</span>
                    </label>
                    <select
                        value={data.commitment_level}
                        onChange={(e) => updateField("commitment_level", e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.commitment_level ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                            }`}
                    >
                        <option value="">Select commitment level</option>
                        {commitmentLevels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                    {errors.commitment_level && (
                        <p className="mt-1 text-xs text-red-500">{errors.commitment_level}</p>
                    )}
                </div>
            </div>

            {/* Deadline */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Application Deadline <span className="text-red-500">*</span>
                </label>
                <input
                    type="date"
                    value={data.deadline}
                    onChange={(e) => updateField("deadline", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.deadline ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                />
                {errors.deadline && (
                    <p className="mt-1 text-xs text-red-500">{errors.deadline}</p>
                )}
            </div>
        </div>
    );
}

export { emptyOpportunity };