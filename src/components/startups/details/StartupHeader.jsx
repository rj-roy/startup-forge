import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function StartupHeader({ startup }) {
    return (
        <div className="mb-8">
            {/* Back Button */}
            <Link
                href="/startups"
                className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-6 transition-colors"
            >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Startups
            </Link>

            {/* Header Content */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex items-start space-x-4">
                    <Image
                        width={200}
                        height={200}
                        src={startup.logo}
                        alt={startup.startup_name}
                        loading="eager"
                        className="w-20 h-20 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-700 shadow-sm"
                    />
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                                {startup.startup_name}
                            </h1>
                            <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                                {startup.industry}
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                            {startup.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                            <span className="text-gray-500 dark:text-gray-400">
                                <span className="font-medium">Funding Stage:</span> {startup.funding_stage}
                            </span>
                            {startup.status === "approved" && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Approved
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <Button variant="secondary" size="md">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        Share
                    </Button>
                    <Link href={`/startups/${startup._id}/#opportunities`}>
                        <Button variant="primary" size="md">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Apply Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}