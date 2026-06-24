import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/20 dark:bg-indigo-500/10 blur-[120px] rounded-full" />
                <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            Now connecting 5,000+ founders & collaborators
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                        Where Founders Meet{" "}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                                Talent
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                                <path d="M2 8C50 3 100 3 150 6C200 9 250 9 298 4" stroke="url(#underline)" strokeWidth="3" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="underline" x1="0" y1="0" x2="300" y2="0">
                                        <stop stopColor="#6366f1" />
                                        <stop offset="1" stopColor="#ec4899" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        The platform where visionary founders post opportunities and passionate collaborators build the future — together.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link
                            href="/auth/signup?role=founder"
                            className="group w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            I&apos;m a Founder
                            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <Link
                            href="/auth/signup?role=collaborator"
                            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            I&apos;m a Collaborator
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 bg-gradient-to-br from-indigo-400 to-purple-500" />
                                ))}
                            </div>
                            <span>Join 5,000+ members</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            <span className="ml-1">4.9/5 rating</span>
                        </div>
                    </div>
                </div>

                {/* Hero Visual */}
                <div className="mt-20 relative max-w-5xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#0a0a0f] via-transparent to-transparent z-10 pointer-events-none" />
                    <div className="relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 text-center text-xs text-gray-500 dark:text-gray-400">
                                startupforge.com/opportunities
                            </div>
                        </div>
                        <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { title: "Senior React Dev", company: "VisionAI", type: "Remote", color: "indigo" },
                                { title: "Product Designer", company: "EduConnect", type: "Hybrid", color: "purple" },
                                { title: "Growth Marketer", company: "HealthSync", type: "On-site", color: "pink" },
                            ].map((opp, idx) => (
                                <div key={idx} className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className={`w-10 h-10 rounded-xl bg-${opp.color}-100 dark:bg-${opp.color}-900/30 flex items-center justify-center`}>
                                            <div className={`w-5 h-5 rounded-md bg-${opp.color}-500`} />
                                        </div>
                                        <span className="text-xs px-2 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                                            {opp.type}
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{opp.title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{opp.company}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}