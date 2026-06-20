import ManageStartupC from "@/components/dashboard/founder/ManageStartUpC";
import { getStartupByFounderId } from "@/lib/api/getData";
import { getUserSession } from "@/lib/core/session";

export const metadata = {
    title: "Manage Startup | Startup Forge",
    description: "Manage Startup",
}
const ManageStartup = async () => {
    const session = await getUserSession();
    const userId = session?.user?.id;
    const startup = await getStartupByFounderId(userId);
    console.log(startup);

    return (
        <div>
            <ManageStartupC defStartup={startup} />
        </div>
    );
};

export default ManageStartup;