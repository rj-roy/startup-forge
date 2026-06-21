import { getUserSession } from "@/lib/core/session";
import { getDataById } from "@/lib/api/getData";
import DashHeader from "@/components/dashboard/founder/home/DashHeader";
import StatsCards from "@/components/dashboard/founder/home/StatsCards";
import QuickActions from "@/components/dashboard/founder/home/QuickActions";
import RecentApplications from "@/components/dashboard/founder/home/RecentApplications";
import ActiveOpportunities from "@/components/dashboard/founder/home/ActiveOpportunities";
export default async function FounderDashboardPage() {
    const session = await getUserSession();
    const opportunities = await getDataById(session?.user?.id, '/api/opportunities/founder');
    const applications = await getDataById(session?.user?.id, '/api/application/founder')

    // Calculate stats
    const stats = {
        totalOpportunities: opportunities.length,
        activeOpportunities: opportunities.filter(
            (opp) => new Date(opp.deadline) > new Date()
        ).length,
        totalApplications: applications.length,
        pendingApplications: applications.filter((a) => a.status === "pending").length,
        approvedApplications: applications.filter((a) => a.status === "approved").length,
    };

    return (
        <div className="min-h-screen bg-white-bg dark:bg-black-bg">
            <DashHeader userName={session?.user?.name || "Founder"} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                <StatsCards stats={stats} />
                <QuickActions />
                <div className="lg:col-span-2">
                    <RecentApplications applications={applications.slice(0, 5)} />
                </div>
                <div className="lg:col-span-1">
                    <ActiveOpportunities opportunities={opportunities.slice(0, 4)} />
                </div>
            </div>
        </div>
    );
}