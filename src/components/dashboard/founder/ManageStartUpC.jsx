'use client'
import { useState, useEffect } from "react";
import ManageStartupHeader from "./ManageStartUpHeader";
import ManageStartupForm from "./ManageStartupForm";
import ManageStartupActions from "./ManageStartupActions";

export default function ManageStartupC({defStartup}) {
    const [startup, setStartup] = useState(defStartup);
    const [originalStartup, setOriginalStartup] = useState(defStartup);
    const [saving, setSaving] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);

    useEffect(() => {
        const changed = JSON.stringify(startup) !== JSON.stringify(originalStartup);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHasChanges(changed);
    }, [startup, originalStartup]);

    const handleSave = async () => {
        setSaving(true);
        try {
            // Replace with actual API call
            // await fetch(`/api/startups/${startup._id}`, {
            //   method: 'PATCH',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(startup)
            // });

            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("PATCH request:", startup);

            setOriginalStartup(startup);
            alert("Changes saved successfully!");
        } catch (error) {
            console.error("Save failed:", error);
            alert("Failed to save changes");
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
            <ManageStartupHeader startup={startup} />

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