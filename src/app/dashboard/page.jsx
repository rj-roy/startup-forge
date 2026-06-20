import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await getUserSession();

    if (!session) {
        redirect('/auth/signin');
    };
    const roleRouters = {
        seeker: '/dashboard/founder',
        recruiter: '/dashboard/collaborator',
        admin: '/dashboard/admin'
    };
    redirect(roleRouters[session?.user?.role] ?? '/auth/signin');
};

export default Dashboard;