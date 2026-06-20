import Image from "next/image";

export default function FounderCard({ founder }) {
    return (
        <section className="bg-linear-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-indigo-100 dark:border-gray-700 p-8">
            <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Founder
                </h2>
            </div>

            <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                        <Image
                            width={200}
                            height={200}
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(founder.name)}&background=6366f1&color=fff&size=128`}
                            alt={founder.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                </div>

                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {founder.name}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                        {founder.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {founder.experience}
                    </p>
                </div>
            </div>

            {/* Quote */}
            <blockquote className="mb-6 pl-4 border-l-4 border-indigo-300 dark:border-indigo-600">
                <p className="text-gray-700 dark:text-gray-300 italic text-sm">
                    &quot;The sun provides all the energy we need. My goal is to make sure we don&apos;t waste a single watt of it.&quot;
                </p>
            </blockquote>

            {/* Social Links */}
            <div className="flex gap-3">
                {founder.linkedin && (
                    <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                )}
                <a
                    href={`mailto:${founder.email}`}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                </a>
            </div>
        </section>
    );
}