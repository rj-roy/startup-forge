"use client";
import Image from "next/image";

export default function StDetailsModal({ startup, onClose, onStatusChange }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose} />

            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">

                {/* Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-4">
                        <Image
                            width={200}
                            height={200}
                            src={startup.logo}
                            alt={startup.startup_name}
                            className="w-12 h-12 rounded-xl object-cover border border-gray-200 dark:border-gray-700" />
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                {startup.startup_name}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {startup.industry} • {startup.funding_stage}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">

                    {/* Description */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                            Description
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {startup.description}
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                            Our Mission
                        </h3>
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                                {startup.our_mission}
                            </p>
                        </div>
                    </div>

                    {/* Founder */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                            Founder
                        </h3>
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 space-y-2">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="text-gray-900 dark:text-gray-100 font-medium">
                                    {startup.founder?.name} • {startup.founder?.title}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href={`mailto:${startup.founder_email}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                                    {startup.founder_email || "No email"}
                                </a>
                            </div>
                            {startup.founder?.linkedin && (
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                    <a href={startup.founder.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-600 dark:text-indigo-400 hover:underline"                                    >
                                        LinkedIn Profile
                                    </a>
                                </div>
                            )}
                            {startup.founder?.experience && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 pl-8">
                                    {startup.founder.experience}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {startup.tech_stack?.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-lg"                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Culture */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                            Culture
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {startup.culture?.map((value, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-lg capitalize"                                >
                                    {value}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                {startup.status === "pending" && (
                    <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-end gap-3">
                        <button
                            onClick={() => {
                                onStatusChange(startup, "rejected");
                                onClose();
                            }}
                            className="px-5 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex items-center gap-2"                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Reject Startup
                        </button>
                        <button
                            onClick={() => {
                                onStatusChange(startup, "approved");
                                onClose();
                            }}
                            className="px-5 py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors flex items-center gap-2"                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Approve Startup
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}