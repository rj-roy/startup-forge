"use client";
import { useState } from "react";
import EditOpModal from "./EditOpModal";
import OpListItem from "@/components/ui/OpListItem";

export default function OpList({ opportunities, role }) {
    const [editingOpportunity, setEditingOpportunity] = useState(null);

    const handleSave = (updatedOpportunity) => {
        setEditingOpportunity(null);
    };

    if (!opportunities || opportunities.length === 0) {
        return (
            <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">No opportunities posted yet.</p>
            </div>
        );
    }

    return (
        <>
            <div className="space-y-4">
                {opportunities.map((opp) => (
                    <OpListItem
                        key={opp._id}
                        opportunity={opp}
                        onEdit={setEditingOpportunity}
                        role={role}
                    />
                ))}
            </div>

            {editingOpportunity && (
                <EditOpModal
                    opportunity={editingOpportunity}
                    onClose={() => setEditingOpportunity(null)}
                    onSave={handleSave}
                />
            )}
        </>
    );
}