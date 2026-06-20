"use client";

import { useState, useEffect } from "react";

const workTypes = ["Remote", "On-site", "Hybrid"];
const commitmentLevels = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"];

export default function EditOpModal({ opportunity, onClose, onSave }) {
    const [formData, setFormData] = useState(opportunity);
    const [skillInput, setSkillInput] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    // Reset form when opportunity changes
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFormData(opportunity);
        setSkillInput("");
    }, [opportunity]);

    const updateField = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const toggleWorkType = (type) => {
        const current = formData.work_type || [];
        const updated = current.includes(type)
            ? current.filter((t) => t !== type)
            : [...current, type];
        setFormData({ ...formData, work_type: updated });
    };

    const addSkill = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const trimmed = skillInput.trim();
            if (trimmed && !formData.required_skills.includes(trimmed)) {
                setFormData({
                    ...formData,
                    required_skills: [...formData.required_skills, trimmed],
                });
                setSkillInput("");
            }
        }
    };

    const removeSkill = (index) => {
        setFormData({
            ...formData,
            required_skills: formData.required_skills.filter((_, i) => i !== index),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        onSave(formData);
        setIsSaving(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={!isSaving ? onClose : undefined}
            />

            {/* Modal Content */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">

                {/* Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        Edit Opportunity
                    </h2>
                    <button
                        onClick={onClose}
                        disabled={isSaving}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">

                    {/* Role Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Role Title
                        </label>
                        <input
                            type="text"
                            value={formData.role_title}
                            onChange={(e) => updateField("role_title", e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Work Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Work Type
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {workTypes.map((type) => {
                                const isSelected = formData.work_type.includes(type);
                                return (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => toggleWorkType(type)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${isSelected
                                                ? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
                                                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                                            }`}
                                    >
                                        {type}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Commitment & Deadline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Commitment Level
                            </label>
                            <select
                                value={formData.commitment_level}
                                onChange={(e) => updateField("commitment_level", e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                {commitmentLevels.map((level) => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Deadline
                            </label>
                            <input
                                type="date"
                                value={formData.deadline}
                                onChange={(e) => updateField("deadline", e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Required Skills */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Required Skills
                        </label>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {formData.required_skills.map((skill, index) => (
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
                            onKeyDown={addSkill}
                            placeholder="Type a skill and press Enter..."
                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSaving}
                            className="px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors flex items-center gap-2"
                        >
                            {isSaving ? (
                                <>
                                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Saving...
                                </>
                            ) : (
                                "Save Changes"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}