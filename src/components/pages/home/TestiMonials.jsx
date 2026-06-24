export default function Testimonials() {
    const testimonials = [
        {
            quote: "We found our CTO within 2 weeks of posting. The quality of collaborators here is unmatched.",
            author: "Sarah Chen",
            role: "Founder, EduConnect",
            avatar: "SC",
            color: "from-indigo-400 to-purple-500",
        },
        {
            quote: "I landed my dream role at a Series A startup. The application process was seamless and transparent.",
            author: "Alex Rivera",
            role: "Collaborator, Product Designer",
            avatar: "AR",
            color: "from-pink-400 to-rose-500",
        },
        {
            quote: "StartupForge changed how we hire. No more black holes — just direct connections with talent.",
            author: "Michael Scott",
            role: "CEO, AgriSmart",
            avatar: "MS",
            color: "from-blue-400 to-cyan-500",
        },
    ];

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        Testimonials
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                        Loved by founders & collaborators
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 hover:shadow-xl transition-all">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                &quot;{t.quote}&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{t.author}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}