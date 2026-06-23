import ColDashHeader from "@/components/dashboard/collaborator/home/ColDashHeader";
import ColQuickActions from "@/components/dashboard/collaborator/home/ColQuickActions";
import ColRecentApplications from "@/components/dashboard/collaborator/home/ColRecentApplications";
import ColStatsCards from "@/components/dashboard/collaborator/home/ColStatsCard";
import { getDataById } from "@/lib/api/getData";
import { getUserSession } from "@/lib/core/session";

export default async function ColDashHome() {
    const session = await getUserSession();
    const applicationsData = await getDataById(session?.user?.id, '/api/application/collaborator');
    const applications = applicationsData.data

    // Calculate stats
    const stats = {
        total: applications.length,
        pending: applications.filter((a) => a.status === "pending").length,
        approved: applications.filter((a) => a.status === "approved").length,
        rejected: applications.filter((a) => a.status === "rejected").length,
    };

    return (
        <div className="min-h-screen bg-white-bg dark:bg-black-bg">
            <ColDashHeader userName={session?.user?.name || "Collaborator"} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                <ColStatsCards stats={stats} />
                <ColQuickActions />
                <ColRecentApplications applications={applications.slice(0, 5)} />
            </div>
        </div>
    );
}