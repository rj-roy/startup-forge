import SearchBar from "@/components/startups/SearchBar";
import StartupList from "@/components/startups/StartUpList";
import { getStartups } from "@/lib/api/getData";
import { getStartupsFiled } from "@/lib/api/getStartupsFiled";

export const metadata = {
    description: "Browse Startups",
    title: "Browse Startups | Startup Forge",
};

const BrowseStartups = async () => {
    const startups = await getStartups();
    const industries = await getStartupsFiled("industry");
    return (
        <div className="min-h-screen pt-16 lg:pt-20 bg-white-bg dark:bg-black-bg">
            <div className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
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