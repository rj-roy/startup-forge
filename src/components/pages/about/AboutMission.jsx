export default function AboutMission() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Why we built this platform
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                        The traditional hiring process is broken. Resumes get lost in black holes, and brilliant ideas die because founders can&apos;t find the right people to build them.
                    </p>
                    <p>
                        We created this platform to democratize access to opportunity. Whether you&apos;re a founder with a groundbreaking idea or a collaborator looking for your next big challenge, we provide the tools to connect, build, and grow together.
                    </p>
                    <p>
                        We believe that the next unicorn startup isn&apos;t built in a silo—it&apos;s built through open collaboration, shared vision, and the right team.
                    </p>
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 dark:opacity-30" />
                <div className="relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 shadow-xl">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">100%</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Transparent Process</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">0%</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Hidden Fees</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                            <p className="text-3xl font-bold text-green-600 dark:text-green-400">24/7</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Community Support</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">∞</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Possibilities</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}