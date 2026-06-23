import CApplicationsList from "@/components/dashboard/collaborator/myApplications/CApplicationsList";
import { getDataById } from "@/lib/api/getData";
import { getUserSession } from "@/lib/core/session";
// import ColDashHeader from "@/components/collaborator/ColDashHeader";

export default async function ColDashMyApplications() {
    const session = await getUserSession();
    const applicationsData = await getDataById(session?.user?.id, '/api/application/collaborator');
    const applications = applicationsData?.data;

    return (
        <div className="min-h-screen bg-white-bg dark:bg-black-bg">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                        My Applications
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Track the status of your job applications.
                    </p>
                </div>

                <CApplicationsList applications={applications} />
            </div>
        </div>
    );
}