import Image from "next/image";
import { useState } from "react";

const industries = [
    "AgriTech", "Artificial Intelligence", "Automotive", "CleanTech",
    "Cloud Computing", "ConstructionTech", "Creator Economy", "Cybersecurity",
    "EdTech", "FinTech", "FoodTech", "HRTech", "HealthTech", "Marketing",
    "PropTech", "RetailTech", "SportsTech", "TravelTech"
];

const fundingStages = ["Pre-Seed", "Seed", "Series A", "Series B", "Series C"];

export default function ManageStartupForm({ startup, onChange }) {
    const [data, setData] = useState(startup);
    const [tagInputs, setTagInputs] = useState({
        tech_stack: "",
        culture: ""
    });

    const updateField = (field, value) => {
        const newData = { ...data, [field]: value };
        setData(newData);
        onChange(newData);
    };

    const updateFounder = (field, value) => {
        const newData = {
            ...data,
            founder: { ...data.founder, [field]: value }
        };
        setData(newData);
        onChange(newData);
    };

    const addTag = (field, value) => {
        const trimmed = value.trim();
        if (trimmed && !data[field].includes(trimmed)) {
            const newData = { ...data, [field]: [...data[field], trimmed] };
            setData(newData);
            onChange(newData);
            setTagInputs({ ...tagInputs, [field]: "" });
        }
    };

    const removeTag = (field, index) => {
        const newData = {
            ...data,
            [field]: data[field].filter((_, i) => i !== index)
        };
        setData(newData);
        onChange(newData);
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updateField("logo", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-8">
            {/* Logo & Basic Info */}
            <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
                    Basic Information
                </h2>

                <div className="flex items-start gap-6">
                    <div>
                        <Image
                            height={200}
                            width={200}
                            src={data.logo}
                            alt="Logo"
                            className="w-24 h-24 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-700"
                        />
                        <label className="mt-2 block cursor-pointer text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-medium">
                            Change Logo
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                className="hidden"
                            />
                        </label>
                    </div>

                    <div className="flex-1 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Startup Name
                            </label>
                            <input
                                type="text"
                                value={data.startup_name}
                                onChange={(e) => updateField("startup_name", e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Industry
                                </label>
                                <select
                                    value={data.industry}
                                    onChange={(e) => updateField("industry", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    {industries.map((ind) => (
                                        <option key={ind} value={ind}>{ind}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Funding Stage
                                </label>
                                <select
                                    value={data.funding_stage}
                                    onChange={(e) => updateField("funding_stage", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    {fundingStages.map((stage) => (
                                        <option key={stage} value={stage}>{stage}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Description
                    </label>
                    <textarea
                        value={data.description}
                        onChange={(e) => updateField("description", e.target.value)}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    />
                </div>
            </div>

            {/* Founder Info */}
            <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
                    Founder Information
                </h2>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            value={data.founder.name}
                            onChange={(e) => updateFounder("name", e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            value={data.founder.title}
                            onChange={(e) => updateFounder("title", e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        LinkedIn URL
                    </label>
                    <input
                        type="url"
                        value={data.founder.linkedin}
                        onChange={(e) => updateFounder("linkedin", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Experience
                    </label>
                    <textarea
                        value={data.founder.experience}
                        onChange={(e) => updateFounder("experience", e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    />
                </div>
            </div>

            {/* Mission */}
            <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
                    Our Mission
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Mission Statement
                    </label>
                    <textarea
                        value={data.our_mission}
                        onChange={(e) => updateField("our_mission", e.target.value)}
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    />
                </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
                    Tech Stack
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Technologies
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {data.tech_stack.map((tech, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                            >
                                {tech}
                                <button
                                    type="button"
                                    onClick={() => removeTag("tech_stack", index)}
                                    className="hover:bg-indigo-200 dark:hover:bg-indigo-800 rounded-full p-0.5"
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
                        value={tagInputs.tech_stack}
                        onChange={(e) => setTagInputs({ ...tagInputs, tech_stack: e.target.value })}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                addTag("tech_stack", tagInputs.tech_stack);
                            }
                        }}
                        placeholder="Type and press Enter to add..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            {/* Culture */}
            <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
                    Company Culture
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Culture Values
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {data.culture.map((value, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium capitalize"
                            >
                                {value}
                                <button
                                    type="button"
                                    onClick={() => removeTag("culture", index)}
                                    className="hover:bg-purple-200 dark:hover:bg-purple-800 rounded-full p-0.5"
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
                        value={tagInputs.culture}
                        onChange={(e) => setTagInputs({ ...tagInputs, culture: e.target.value })}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                addTag("culture", tagInputs.culture);
                            }
                        }}
                        placeholder="Type and press Enter to add..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>
        </div>
    );
}