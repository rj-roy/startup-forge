import CSComponent from "@/components/dashboard/founder/createStartupAll/CSComponent";
import { getStartupByFounderId } from "@/lib/api/getData";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Create Startup | Startup Forge",
    description: "Create Startup"
};

const CreateStartup = async () => {
    const session = await getUserSession();
    const founderId = session?.user?.id;

    const isAlreadyCreated = await getStartupByFounderId(founderId);

    if (!session) {
        redirect("/auth/signin");
    };
    if (isAlreadyCreated) {
        redirect("/dashboard/founder/manage-startup");
    };

    return (
        <div>
            <CSComponent founderId={founderId}/>
        </div>
    );
};

export default CreateStartup;