import AdminOppHeader from "@/components/dashboard/admin/opportunities/AdminOopHeader";
import AdminOppList from "@/components/dashboard/admin/opportunities/AdminOopList";
import AdminOppStats from "@/components/dashboard/admin/opportunities/AdminOopStats";
import { getDataByCollection } from "@/lib/api/getData";

export default async function AdminDashboardOpp() {
    const allOpportunities = await getDataByCollection('/api/opportunities');
    
    const stats = {
        total: allOpportunities.length,
        active: allOpportunities.filter((opp) => new Date(opp.deadline) > new Date()).length,
        expired: allOpportunities.filter((opp) => new Date(opp.deadline) <= new Date()).length,
        remote: allOpportunities.filter((opp) => opp.work_type.includes("Remote")).length,
        fullTime: allOpportunities.filter((opp) => opp.commitment_level === "Full-time").length,
        partTime: allOpportunities.filter((opp) => opp.commitment_level === "Part-time").length,
    };

    return (
        <div className="min-h-screen bg-white-bg dark:bg-black-bg">
            <AdminOppHeader />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                {/* Stats Cards */}
                <AdminOppStats stats={stats} />

                {/* Opportunities List */}
                <AdminOppList opportunities={allOpportunities} />
            </div>
        </div>
    );
}