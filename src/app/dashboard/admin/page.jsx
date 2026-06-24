import AdminHomeHeader from "@/components/dashboard/admin/home/AdminHomeHeader";
import AdminQuickLinks from "@/components/dashboard/admin/home/AdminQuickLinks";
import AdminRecentPending from "@/components/dashboard/admin/home/AdminRecentPending";
import AdminStatsGrid from "@/components/dashboard/admin/home/AdminStatsGrid";
import { getDataByCollection, getPrDataByCollection } from "@/lib/api/getData";

export default async function AdminHomePage() {
    const allUsers = await getPrDataByCollection('/api/users');
    const allStartups = await getDataByCollection('/api/startups');
    const allOpportunities = await getDataByCollection('/api/opportunities');

    const stats = {
        users: allUsers.length,
        startups: allStartups.length,
        pendingStartups: allStartups.filter((s) => s.status === "pending").length,
        opportunities: allOpportunities.length,
    };

    const recentPending = allStartups
        .filter((s) => s.status === "pending")
        .slice(0, 5);

    return (
        <div className="min-h-screen bg-white-bg dark:bg-black-bg">
            <AdminHomeHeader />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                <AdminStatsGrid stats={stats} />
                <AdminQuickLinks />
                <AdminRecentPending startups={recentPending} />
            </div>
        </div>
    );
}