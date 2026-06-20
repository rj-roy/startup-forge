'use client'
import { useState, useEffect } from "react";
import ManageStartupHeader from "./ManageStartUpHeader";
import ManageStartupForm from "./ManageStartupForm";
import ManageStartupActions from "./ManageStartupActions";

// Default startup data
const defaultStartup = {
    "_id": "6a3626059feb083fc050b7b3",
    "startup_name": "VisionAI",
    "logo": "https://picsum.photos/seed/startup20/400/400",
    "industry": "Artificial Intelligence",
    "description": "Computer vision solutions for enterprises.",
    "funding_stage": "Series A",
    "founder_email": "sophia.green@visionai.com",
    "founder": {
        "founder_id": "6a363530ac19cc5f3e99f8b2",
        "name": "Sophia Green",
        "title": "CEO & Founder",
        "linkedin": "https://linkedin.com/in/sophiagreen",
        "experience": "AI researcher and startup founder."
    },
    "our_mission": "VisionAI delivers enterprise-grade, highly accurate computer vision solutions powered by cutting-edge artificial intelligence to solve complex real-world problems. Our platform provides customizable models for object detection, facial recognition, quality control, and spatial analysis, seamlessly integrating into existing enterprise workflows to drive automation and operational efficiency. Driven by a remote, impact-driven culture, we are pushing the boundaries of what AI can achieve, empowering industries ranging from manufacturing to security to harness the transformative power of visual data and shape the future of intelligent automation.",
    "tech_stack": ["Python", "TensorFlow", "OpenAI API", "AWS"],
    "culture": ["remote", "impact driven"],
    "status": "approved"
};

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