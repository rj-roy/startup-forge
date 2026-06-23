import AOComponent from "@/components/dashboard/founder/addOpportunity/AOComponent";
import StartupPendingModal from "@/components/dashboard/founder/StartupPendingModal";
import { getDataById, } from "@/lib/api/getData";
import { getUserSession } from "@/lib/core/session";
import Link from "next/link";

export const metadata = {
    title: "Add Opportunity | Startup Forge",
    description: "Add Opportunity"
}
const AddOpportunity = async () => {
    const session = await getUserSession();

    const hasStartup = await getDataById(session?.user?.id, '/api/startups/founder');
    const isPending = hasStartup?.status !== "approved";

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
        );
    } else if (hasStartup && hasStartup?.status !== "approved") {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-black-bg">
                {hasStartup && (
                    <StartupPendingModal
                        isOpen={isPending}
                        startupName={hasStartup.startup_name}
                        startupId={hasStartup._id}
                    />
                )}
            </div>
        );
    } else if (hasStartup && hasStartup?.status === 'Approved') {
        return (
            <div>
                <AOComponent startupName={hasStartup?.startup_name} startupId={hasStartup?._id} />
            </div>
        );
    };

};

export default AddOpportunity;