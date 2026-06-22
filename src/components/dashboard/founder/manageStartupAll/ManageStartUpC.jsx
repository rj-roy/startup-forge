'use client'
import { useState, useEffect } from "react";
import ManageStartupHeader from "./ManageStartUpHeader";
import ManageStartupForm from "./ManageStartupForm";
import ManageStartupActions from "./ManageStartupActions";
import { toast, ToastContainer } from "react-toastify";
import { patchAction } from "@/lib/actions/patchAction";
import { authClient } from "@/lib/auth-client";

export default function ManageStartupC({ defStartup }) {
    const [startup, setStartup] = useState(defStartup);
    const [originalStartup, setOriginalStartup] = useState(defStartup);
    const [saving, setSaving] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);
    const { data: session } = authClient.useSession();

    useEffect(() => {
        const changed = JSON.stringify(startup) !== JSON.stringify(originalStartup);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHasChanges(changed);
    }, [startup, originalStartup]);

    const handleSave = async () => {
        setSaving(true);
        try {
            const { _id, ...updateData } = startup;
            await patchAction(_id, updateData, '/api/startup', '/dashboard/founder/manage-startup', 'founder');

            await new Promise(resolve => setTimeout(resolve, 1000));

            setOriginalStartup(startup);
            toast.success("Changes saved successfully!");
        } catch (error) {
            toast.error("Failed to save changes");
        } finally {
            setSaving(false);
        }
    };

    const handleDiscard = () => {
        if (hasChanges && confirm("Discard all unsaved changes?")) {
            setStartup(originalStartup);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black-bg">
            <ToastContainer />
            <ManageStartupHeader
                startup={startup}
                role = {session?.user?.role}
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <ManageStartupForm
                    startup={startup}
                    onChange={setStartup}
                />
            </div>

            <ManageStartupActions
                onSave={handleSave}
                onDiscard={handleDiscard}
                saving={saving}
                hasChanges={hasChanges}
            />
        </div>
    );
}