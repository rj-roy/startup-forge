'use client'
import { useState } from "react";
import AOForm, { emptyOpportunity } from "./AOForm";
import AOHeader from "./AOHeader";
import AOActions from "./AOActions";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { createOpportunities } from "@/lib/actions/createOpportunities";

export default function AOComponent({startupName, startupId}) {
    const router = useRouter();
    const [opportunity, setOpportunity] = useState(emptyOpportunity);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [hasChanges, setHasChanges] = useState(false);

    const handleChange = (newData) => {
        setOpportunity(newData);
        const changed = JSON.stringify(newData) !== JSON.stringify(emptyOpportunity);
        setHasChanges(changed);
        setErrors({});
    };

    const validate = () => {
        const newErrors = {};

        if (!opportunity.role_title?.trim()) newErrors.role_title = "Role title is required";
        if (!opportunity.work_type || opportunity.work_type.length === 0) {
            newErrors.work_type = "Select at least one work type";
        };
        if (!opportunity.commitment_level) newErrors.commitment_level = "Commitment level is required";
        if (!opportunity.deadline) newErrors.deadline = "Deadline is required";

        if (!opportunity.required_skills || opportunity.required_skills.length === 0) {
            newErrors.required_skills = "Add at least one required skill";
        };
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        };

        setSubmitting(true);
        try {
            await createOpportunities(opportunity);

            await new Promise(resolve => setTimeout(resolve, 1500));
            toast.success("Successfully posted opportunity!",);
            router.push("/dashboard/founder/manage-opportunities");
        } catch (error) {
            console.error("Create failed:");
            toast.error("Failed to post opportunity. Please try again.");
        } finally {
            setSubmitting(false);
        };
    };

    const handleCancel = () => {
        if (hasChanges && !confirm("Discard all changes and go back?")) {
            return;
        };
        router.push("/dashboard/founder");
    };

    return (
        <div className="min-h-screen bg-white-bg dark:bg-black-bg">
            <ToastContainer />
            <AOHeader />

            <div className=" mx-auto px-2 sm:px-3 lg:px-4 py-8">
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

                <AOForm
                    data={opportunity}
                    onChange={handleChange}
                    errors={errors}
                    startupName={startupName}
                    startupId={startupId}
                />
            </div>

            <AOActions
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                submitting={submitting}
                hasChanges={hasChanges}
            />
        </div>
    );
};