import { getDataByCollection } from "@/lib/api/getData";
import AdminUsersHeader from "@/components/dashboard/admin/users/AdminUsersHeader";
import AdminUsersStats from "@/components/dashboard/admin/users/AdminUsersStats";
import AdminUsersList from "@/components/dashboard/admin/users/AdminUsersList";

export default async function AdminDashUsersPage() {
    const usersData = await getDataByCollection('/api/users');
    const allUsers = usersData?.data;

    const stats = {
        total: allUsers.length,
        active: allUsers.filter((u) => u.status !== "blocked").length,
        blocked: allUsers.filter((u) => u.status === "blocked").length,
        founders: allUsers.filter((u) => u.role === "founder").length,
        seekers: allUsers.filter((u) => u.role === "seeker").length,
        collaborators: allUsers.filter((u) => u.role === "collaborator").length,
    };

    return (
        <div className="min-h-screen bg-white-bg dark:bg-black-bg">
            <AdminUsersHeader />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                <AdminUsersStats stats={stats} />
                <AdminUsersList users={allUsers} />
            </div>
        </div>
    );
}