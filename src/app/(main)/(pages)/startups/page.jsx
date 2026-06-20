import StartupList from "@/components/startups/StartUpList";
import { getStartups, getStartupsFiled } from "@/lib/api/getData";

export const metadata = {
    description: "Browse Startups",
    title: "Browse Startups | Startup Forge",
};

const BrowseStartups = async () => {
    const startups = await getStartups();
    const industries = await getStartupsFiled("industry");
    return (
        <div className="min-h-screen bg-white-bg dark:bg-black-bg">
            <div className="bg-white-bg border-b border-gray-200 dark:bg-black-bg dark:border-gray-800 w-full max-w-5xl mx-auto">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Discover Startups
                    </h1>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Find innovative startups looking for team members
                    </p>
                </div>
            </div>

            <StartupList startups={startups} />
        </div>
    );
};

export default BrowseStartups;