import CSComponent from "@/components/dashboard/founder/createStartupAll/CSComponent";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Create Startup | Startup Forge",
    description: "Create Startup"
};

const CreateStartup = async () => {
    const session = await getUserSession();

    if (!session) {
        redirect("/auth/signin");
    };

    return (
        <div>
            <CSComponent/>
        </div>
    );
};

export default CreateStartup;