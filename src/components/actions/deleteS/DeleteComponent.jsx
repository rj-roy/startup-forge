'use client'
import { useState } from "react";
import { Trash2 } from "lucide-react";
import DeleteModal from "./DeleteModal";

export default function DeleteComponent({ id, name }) {
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
                id={id}
                name={name}
            />
        </>
    );
}