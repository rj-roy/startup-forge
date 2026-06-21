import ApplicationsList from "@/components/dashboard/founder/applications/ApplicationsList";
import { getDataById } from "@/lib/api/getData";
import { getUserSession } from "@/lib/core/session";

const ApplicationsPage = async () => {
    const session = await getUserSession();
    const applicationsByFounder = await getDataById(session?.user?.id, '/api/application/founder');

    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Applications
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Review and manage applications for your opportunities.
                    </p>
                </div>

                <ApplicationsList applications={applicationsByFounder} />
            </div>
        </div>
    );
};

export default ApplicationsPage;