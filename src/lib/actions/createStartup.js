'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";
import { getUserSession } from "../core/session";
import { getDataById, } from "../api/getData";

export const createStartup = async (data) => {

    const session = await getUserSession();
    if (!session?.user?.id || !session?.user?.role === 'founder') {
        throw new Error("Unauthorized");
    };
    
    // getStartupByFounderId
    const isAlreadyCreated = await getDataById(session?.user?.id, '/api/startups/founder');
    if (isAlreadyCreated) {
        revalidatePath('/forbidden');
        throw new Error("You have already created a startup");
    };

    const res = await serverMutation('/api/startup/create', data, 'POST');
    revalidatePath('/dashboard/founder/my-startup');
    return res;
};