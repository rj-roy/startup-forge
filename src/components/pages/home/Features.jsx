export default function Features() {
    const features = [
        {
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            title: "Lightning Fast Matching",
            description: "Our algorithm connects founders with the right talent in hours, not months.",
            color: "indigo",
        },
        {
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
            title: "Verified Profiles",
            description: "Every founder and collaborator is verified for trust and authenticity.",
            color: "purple",
        },
        {
            icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
            title: "Direct Messaging",
            description: "Skip the middleman. Communicate directly with founders and collaborators.",
            color: "pink",
        },
        {
            icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
            title: "Smart Analytics",
            description: "Track applications, profile views, and engagement with powerful insights.",
            color: "blue",
        },
        {
            icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
            title: "Secure & Private",
            description: "Enterprise-grade security protects your data and intellectual property.",
            color: "green",
        },
        {
            icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            title: "Global Reach",
            description: "Connect with talent and founders from 45+ countries worldwide.",
            color: "orange",
        },
    ];

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        Why StartupForge
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                        Everything you need to build great teams
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Powerful tools designed for the modern startup ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-${feature.color}-100 dark:bg-${feature.color}-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <svg className={`w-6 h-6 text-${feature.color}-600 dark:text-${feature.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}