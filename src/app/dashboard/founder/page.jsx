import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/dist/server/api-utils";

const OverView = async () => {
    const session = await getUserSession();
    if (!session) {
        redirect("/auth/signin");
    };
    return (
        <div>
            Overview
        </div>
    );
};

export default OverView;