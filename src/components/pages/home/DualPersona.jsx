import Link from "next/link";

export default function DualPersona() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        Built for Everyone
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                        Two sides, one platform
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* For Founders */}
                    <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 sm:p-12 text-white">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">For Founders</h3>
                            <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                                Post opportunities, review applications, and build your dream team from a global talent pool.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Create unlimited startup profiles", "Post & manage opportunities", "Review applications in one place", "Direct messaging with talent"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/auth/signup?role=founder"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                Get Started as Founder
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* For Collaborators */}
                    <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 to-rose-700 p-8 sm:p-12 text-white">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">For Collaborators</h3>
                            <p className="text-pink-100 text-lg mb-8 leading-relaxed">
                                Discover exciting startups, apply to roles that match your skills, and grow your career.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Browse curated opportunities", "Apply with one click", "Track application status", "Build your professional profile"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/auth/signup?role=collaborator"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                Get Started as Collaborator
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}