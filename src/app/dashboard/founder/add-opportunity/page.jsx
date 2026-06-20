import AOComponent from "@/components/dashboard/founder/addOpportunity/AOComponent";
import { getStartupByFounderId } from "@/lib/api/getData";
import { getUserSession } from "@/lib/core/session";

export const metadata = {
    title: "Add Opportunity | Startup Forge",
    description: "Add Opportunity"
}
const AddOpportunity = async () => {
    const session = await getUserSession();
    const hasStartup = await getStartupByFounderId(session?.user?.id);
    return (
        <div>
            <AOComponent startupName={hasStartup.startup_name} startupId={hasStartup._id} />
        </div>
    );
};

export default AddOpportunity;