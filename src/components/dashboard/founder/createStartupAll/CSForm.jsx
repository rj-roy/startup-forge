'use client'
import Image from "next/image";
import { useState } from "react";

const industries = [
    "AgriTech", "Artificial Intelligence", "Automotive", "CleanTech",
    "Cloud Computing", "ConstructionTech", "Creator Economy", "Cybersecurity",
    "EdTech", "FinTech", "FoodTech", "HRTech", "HealthTech", "Marketing",
    "PropTech", "RetailTech", "SportsTech", "TravelTech"
];

const fundingStages = ["Pre-Seed", "Seed", "Series A", "Series B", "Series C"];

const emptyStartup = {
    startup_name: "",
    logo: "https://picsum.photos/seed/default/400/400",
    industry: "",
    description: "",
    funding_stage: "",
    founder_email: "",
    founder: {
        name: "",
        title: "",
        linkedin: "",
        experience: ""
    },
    our_mission: "",
    tech_stack: [],
    culture: [],
    status: "pending"
};

export default function CSForm({ data, onChange, errors = {} }) {
    const [tagInputs, setTagInputs] = useState({
        tech_stack: "",
        culture: ""
    });
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    const updateField = (field, value) => {
        const newData = { ...data, [field]: value };
        onChange(newData);
    };

    const updateFounder = (field, value) => {
        const newData = {
            ...data,
            founder: { ...data.founder, [field]: value }
        };
        onChange(newData);
    };

    const handleLogoChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setUploadError("Please upload a valid image file");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            setUploadError("File size must be less than 2MB");
            return;
        }

        setUploading(true);
        setUploadError(null);

        try {
            const formData = new FormData();
            formData.append("logo", file);

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.message || "Upload failed");
            }

            updateField("logo", result.url);
        } catch (error) {
            console.error("Upload error:", error);
            setUploadError(error.message || "Failed to upload logo");
        } finally {
            setUploading(false);
            e.target.value = "";
        }
    };

    const addTag = (field, value) => {
        const trimmed = value.trim();
        if (trimmed && !data[field].includes(trimmed)) {
            const newData = { ...data, [field]: [...data[field], trimmed] };
            onChange(newData);
            setTagInputs({ ...tagInputs, [field]: "" });
        }
    };

    const removeTag = (field, index) => {
        const newData = {
            ...data,
            [field]: data[field].filter((_, i) => i !== index)
        };
        onChange(newData);
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
                        <div className="relative">
                            <Image
                                width={400}
                                height={400}
                                src={data.logo}
                                alt="Logo"
                                className={`w-24 h-24 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-700 ${uploading ? "opacity-50" : ""
                                    }`}
                            />

                            {uploading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
                                    <svg className="animate-spin w-8 h-8 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                </div>
                            )}
                        </div>

                        <label
                            className={`mt-2 block cursor-pointer text-sm font-medium ${uploading
                                ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                                : "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700"
                                }`}
                        >
                            {uploading ? "Uploading..." : "Upload Logo"}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                disabled={uploading}
                                className="hidden"
                            />
                        </label>

                        {uploadError && (
                            <div className="mt-2 flex items-start gap-1">
                                <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <p className="text-xs text-red-500">{uploadError}</p>
                            </div>
                        )}

                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            PNG, JPG up to 2MB
                        </p>
                    </div>

                    <div className="flex-1 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Startup Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={data.startup_name}
                                onChange={(e) => updateField("startup_name", e.target.value)}
                                placeholder="e.g. VisionAI"
                                className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.startup_name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                    }`}
                            />
                            {errors.startup_name && (
                                <p className="mt-1 text-xs text-red-500">{errors.startup_name}</p>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Industry <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={data.industry}
                                    onChange={(e) => updateField("industry", e.target.value)}
                                    className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.industry ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                        }`}
                                >
                                    <option value="">Select industry</option>
                                    {industries.map((ind) => (
                                        <option key={ind} value={ind}>{ind}</option>
                                    ))}
                                </select>
                                {errors.industry && (
                                    <p className="mt-1 text-xs text-red-500">{errors.industry}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Funding Stage <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={data.funding_stage}
                                    onChange={(e) => updateField("funding_stage", e.target.value)}
                                    className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.funding_stage ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                        }`}
                                >
                                    <option value="">Select stage</option>
                                    {fundingStages.map((stage) => (
                                        <option key={stage} value={stage}>{stage}</option>
                                    ))}
                                </select>
                                {errors.funding_stage && (
                                    <p className="mt-1 text-xs text-red-500">{errors.funding_stage}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        value={data.description}
                        onChange={(e) => updateField("description", e.target.value)}
                        placeholder="Brief description of your startup..."
                        rows={3}
                        className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${errors.description ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                            }`}
                    />
                    {errors.description && (
                        <p className="mt-1 text-xs text-red-500">{errors.description}</p>
                    )}
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
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={data.founder.name}
                            onChange={(e) => updateFounder("name", e.target.value)}
                            placeholder="e.g. Sophia Green"
                            className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors["founder.name"] ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                }`}
                        />
                        {errors["founder.name"] && (
                            <p className="mt-1 text-xs text-red-500">{errors["founder.name"]}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={data.founder.title}
                            onChange={(e) => updateFounder("title", e.target.value)}
                            placeholder="e.g. CEO & Founder"
                            className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors["founder.title"] ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                }`}
                        />
                        {errors["founder.title"] && (
                            <p className="mt-1 text-xs text-red-500">{errors["founder.title"]}</p>
                        )}
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
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Experience <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        value={data.founder.experience}
                        onChange={(e) => updateFounder("experience", e.target.value)}
                        placeholder="Brief description of your experience..."
                        rows={4}
                        className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${errors["founder.experience"] ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                            }`}
                    />
                    {errors["founder.experience"] && (
                        <p className="mt-1 text-xs text-red-500">{errors["founder.experience"]}</p>
                    )}
                </div>
            </div>

            {/* Mission */}
            <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
                    Our Mission
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Mission Statement <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        value={data.our_mission}
                        onChange={(e) => updateField("our_mission", e.target.value)}
                        placeholder="Describe your startup's mission and vision..."
                        rows={6}
                        className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${errors.our_mission ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                            }`}
                    />
                    {errors.our_mission && (
                        <p className="mt-1 text-xs text-red-500">{errors.our_mission}</p>
                    )}
                </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
                    Tech Stack
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Technologies <span className="text-red-500">*</span>
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
                    {errors.tech_stack && (
                        <p className="mt-1 text-xs text-red-500">{errors.tech_stack}</p>
                    )}
                </div>
            </div>

            {/* Culture */}
            <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-3">
                    Company Culture
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Culture Values <span className="text-red-500">*</span>
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
                    {errors.culture && (
                        <p className="mt-1 text-xs text-red-500">{errors.culture}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export { emptyStartup };