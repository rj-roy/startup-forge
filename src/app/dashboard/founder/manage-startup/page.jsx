import ManageStartupC from "@/components/dashboard/founder/manageStartupAll/ManageStartUpC";
import { getStartupByFounderId } from "@/lib/api/getData";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Manage Startup | Startup Forge",
    description: "Manage Startup",
}
const ManageStartup = async () => {
    const session = await getUserSession();
    const userId = session?.user?.id;
    const startup = await getStartupByFounderId(userId || null);

    if (!session){
        redirect("/auth/signin");
    };

    if (!startup){
        redirect("/dashboard/founder/create-startup");
    };
        
    return (
        <div>
            <ManageStartupC defStartup={startup} />
        </div>
    );
};

export default ManageStartup;