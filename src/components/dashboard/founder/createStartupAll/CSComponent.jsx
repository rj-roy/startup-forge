'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import CSHeader from "./CSHeader";
import CSForm, { emptyStartup } from "./CSForm";
import CSActions from "./CSActions";
import { createStartup } from "@/lib/actions/createStartup";
import { toast, ToastContainer } from "react-toastify";

export default function CSComponent({founderId}) {
    const router = useRouter();
    const [startup, setStartup] = useState(emptyStartup);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [hasChanges, setHasChanges] = useState(false);

    const handleChange = (newData) => {
        setStartup(newData);
        const changed = JSON.stringify(newData) !== JSON.stringify(emptyStartup);
        setHasChanges(changed);
        setErrors({});
    };

    const validate = () => {
        const newErrors = {};

        if (!startup.startup_name?.trim()) newErrors.startup_name = "Startup name is required";
        if (!startup.industry) newErrors.industry = "Industry is required";
        if (!startup.funding_stage) newErrors.funding_stage = "Funding stage is required";
        if (!startup.description?.trim()) newErrors.description = "Description is required";
        if (!startup.our_mission?.trim()) newErrors.our_mission = "Mission is required";

        if (!startup.founder?.name?.trim()) newErrors["founder.name"] = "Founder name is required";
        if (!startup.founder?.title?.trim()) newErrors["founder.title"] = "Founder title is required";
        if (!startup.founder?.experience?.trim()) newErrors["founder.experience"] = "Experience is required";

        if (!startup.tech_stack || startup.tech_stack.length === 0) {
            newErrors.tech_stack = "Add at least one technology";
        }
        if (!startup.culture || startup.culture.length === 0) {
            newErrors.culture = "Add at least one culture value";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        setSubmitting(true);
        try {
            await createStartup(startup);
            await new Promise(resolve => setTimeout(resolve, 1500));
            router.push("/dashboard/founder");

        } catch (error) {
            toast.error("Create failed:", error);
            toast.error("Failed to create startup. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleCancel = () => {
        if (hasChanges && !confirm("Discard all changes and go back?")) {
            return;
        }
        router.push("/dashboard/founder");
    };

    return (
        <div className="min-h-screen bg-white-bg dark:bg-black-bg">
            <ToastContainer/>
            <CSHeader />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Validation Error Summary */}
                {Object.keys(errors).length > 0 && (
                    <div className="mb-6 px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div>
                                <p className="text-sm font-medium text-red-800 dark:text-red-200">
                                    Please fix the following errors:
                                </p>
                                <ul className="mt-2 text-sm text-red-700 dark:text-red-300 list-disc list-inside space-y-1">
                                    {Object.entries(errors).map(([key, error]) => (
                                        <li key={key}>{error}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                <CSForm
                    data={startup}
                    onChange={handleChange}
                    errors={errors}
                    founderId={founderId}
                />
            </div>

            <CSActions
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                submitting={submitting}
                hasChanges={hasChanges}
            />
        </div>
    );
}