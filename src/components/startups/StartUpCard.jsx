import Image from "next/image";
import Link from "next/link";

const getTeamSizeText = (fundingStage) => {
    const stages = {
        "Pre-Seed": "1-2 Members",
        "Seed": "2-3 Members",
        "Series A": "4-6 Members",
        "Series B": "6-10 Members",
    };
    return stages[fundingStage] || "2-3 Members";
};

export default function StartupCard({ startup }) {
    const teamSize = getTeamSizeText(startup.funding_stage);

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200 dark:bg-gray-900 dark:border-gray-700 dark:hover:shadow-gray-800/50">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                    <Image
                        width={200}
                        height={200}
                        src={startup.logo}
                        alt={startup.startup_name}
                        className="w-12 h-12 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {startup.startup_name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            by {startup.founder_email.split('@')[0].replace('.', ' ')}
                        </p>
                    </div>
                </div>
                <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {startup.industry}
                </span>
            </div>

            <p className="text-gray-600 mb-4 line-clamp-2 dark:text-gray-300">
                {startup.description}
            </p>

            <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Needs {teamSize}</span>
                </div>

                <Link
                    href={`/startups/${startup._id}`}
                    size="sm"
                    className="px-3 py-1 rounded-md text-sm font-medium bg-[#0d6efd] hover:bg-[#0d6efd]/90">
                    View Details
                </Link>
            </div>

            {startup.status === "pending" && (
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                    <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">Pending Approval</span>
                </div>
            )}
        </div>
    );
}