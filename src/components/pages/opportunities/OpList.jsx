"use client";

import { useState } from "react";
import OpCard from "./OpCard";
import ApplyModal from "./ApplyModal";
import { authClient } from "@/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";

export default function OpList({ opportunities }) {
    const { data: session } = authClient.useSession();
    const [applyingFor, setApplyingFor] = useState(null);

    const handleApplySuccess = () => {
        if (!session?.user?.role === 'collaborator') {
            toast.error("You are not authorized to apply for opportunities.");
        } else if (session?.user?.role === 'collaborator') {
            toast.success("Applied for opportunity successfully!");
            alert("Application submitted successfully! wait for approval");
            setApplyingFor(null);
        }
    };

    if (!opportunities || opportunities.length === 0) {
        return (
            <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-lg">No opportunities available at the moment.</p>
            </div>
        );
    }

    return (
        <>
            <ToastContainer />
            <div className="rounded-2xl space-y-5">
                {opportunities.map((opp) => (
                    <OpCard
                        key={opp._id}
                        opportunity={opp}
                        onApply={() => setApplyingFor(opp)}
                    />
                ))}
            </div>

            {applyingFor && (
                <ApplyModal
                    opportunity={applyingFor}
                    onClose={() => setApplyingFor(null)}
                    onSuccess={handleApplySuccess}
                />
            )}
        </>
    );
}