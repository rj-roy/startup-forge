import Link from "next/link";

export default function AboutCTA() {
    return (
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to join the movement?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
                Whether you&apos;re looking to build your next big thing or find the perfect team to join, your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    href="/auth/signup?role=founder"
                    className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
                >
                    Join as a Founder
                </Link>
                <Link
                    href="/auth/signup?role=collaborator"
                    className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 transition-all hover:-translate-y-0.5"
                >
                    Join as a Collaborator
                </Link>
            </div>
        </div>
    );
}