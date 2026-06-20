'use client'
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { Trash2 } from "lucide-react";

export default function DeleteStartup({ id, name }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="cursor-pointer p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                aria-label="Delete startup"
            >
                <Trash2 color="red"/>
            </button>

            <DeleteModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                startupId={id}
                startupName={name}
            />
        </>
    );
}