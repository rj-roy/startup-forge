import StatsCard from "@/components/dashboard/admin/startups/StatsCard";
import StHeader from "@/components/dashboard/admin/startups/StHeader";
import StList from "@/components/dashboard/admin/startups/StList";
import { getDataByCollection } from "@/lib/api/getData";

const AdminStartupsPage = async () => {
    const allStartups = await getDataByCollection('/api/startups');
    const stats = {
        total: allStartups.length,
        pending: allStartups.filter((s) => s.status === "pending").length,
        approved: allStartups.filter((s) => s.status === "approved").length,
        rejected: allStartups.filter((s) => s.status === "rejected").length,
    };

    return (
        <div className="min-h-screen bg-white-bg dark:bg-black-bg">
            <StHeader />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                <StatsCard stats={stats} />
                <StList startups={allStartups} />
            </div>
        </div>
    );
}
export default AdminStartupsPage;