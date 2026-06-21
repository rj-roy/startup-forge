import OpList from "@/components/dashboard/founder/manageOpportunities/OpList";
import { getDataById } from "@/lib/api/getData";
import { getUserSession } from "@/lib/core/session";

export const metadata = {
    title: "Manage Opportunities | Startup Forge",
    description: "Manage Opportunities",
};

const ManageOpportunities = async () => {
    const session = await getUserSession();

    // getOpportunitesByFounderId
    const allOpportunitiesByFounder = await getDataById(session?.user?.id, '/api/opportunities/founder');
    return (
        <div className="min-h-screen bg-white-bg dark:bg-black-bg p-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            Manage Opportunities
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            View and update your posted roles
                        </p>
                    </div>
                </div>

                <OpList opportunities={allOpportunitiesByFounder} />
            </div>
        </div>
    );
};

export default ManageOpportunities;