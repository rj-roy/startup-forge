import OpList from "@/components/pages/opportunities/OpList";
import { getDataByCollection } from "@/lib/api/getData";

export const metadata = {
    title: "Manage Opportunities | Startup Forge",
    description: "Manage Opportunities"
};

const OpportinitiesPage = async () => {
    const opportunities = await getDataByCollection("/api/opportunities");
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black-bg py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Open Opportunities
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Find your next role and join an innovative startup.
                    </p>
                </div>

                <OpList opportunities={opportunities} />
            </div>
        </div>
    );
};

export default OpportinitiesPage;