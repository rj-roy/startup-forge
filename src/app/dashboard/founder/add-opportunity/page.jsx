import AOComponent from "@/components/dashboard/founder/addOpportunity/AOComponent";
import { getDataById, } from "@/lib/api/getData";
import { getUserSession } from "@/lib/core/session";
import Link from "next/link";

export const metadata = {
    title: "Add Opportunity | Startup Forge",
    description: "Add Opportunity"
}
const AddOpportunity = async () => {
    const session = await getUserSession();
    
    // getStartupByFounderId
    const hasStartup = await getDataById(session?.user?.id, '/api/startups/founder');

    if (!hasStartup) {
        return (
            <div className="grid place-items-center h-[70dvh]">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">You need to create a startup first</h1>
                    <p className="text-sm">Please go to the dashboard and create a startup</p>
                <Link href="/dashboard/founder/create-startup" className="underline font-bold text-blue-500 text-xl">
                    Create Startup
                </Link>
                </div>
            </div>
        )
    };
    return (
        <div>
            <AOComponent startupName={hasStartup?.startup_name} startupId={hasStartup?._id} />
        </div>
    );
};

export default AddOpportunity;