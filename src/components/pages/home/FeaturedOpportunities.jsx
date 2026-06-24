import Link from "next/link";

export default function FeaturedOpportunities() {
    const opportunities = [
        { title: "Senior Frontend Engineer", company: "VisionAI", industry: "AI", type: "Remote", deadline: "5 days left", skills: ["React", "Next.js", "TypeScript"] },
        { title: "Product Designer", company: "EduConnect", industry: "EdTech", type: "Hybrid", deadline: "12 days left", skills: ["Figma", "UX Research"] },
        { title: "Growth Marketer", company: "HealthSync", industry: "HealthTech", type: "Remote", deadline: "3 days left", skills: ["SEO", "Analytics"] },
    ];

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
                    <div>
                        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                            Hot Opportunities
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-3">
                            Trending this week
                        </h2>
                    </div>
                    <Link href="/opportunities" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                        View all opportunities →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {opportunities.map((opp, idx) => (
                        <div key={idx} className="group bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                    {opp.company.charAt(0)}
                                </div>
                                <span className="text-xs px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-medium">
                                    {opp.type}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {opp.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                {opp.company} • {opp.industry}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {opp.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-sm">
                                <span className="text-gray-500 dark:text-gray-400">{opp.deadline}</span>
                                <span className="text-indigo-600 dark:text-indigo-400 font-medium">Apply →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}