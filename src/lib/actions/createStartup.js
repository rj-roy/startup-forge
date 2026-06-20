'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";
import { getUserSession } from "../core/session";

export const createStartup = async (data) => {
    const session = await getUserSession();
    if (!session?.user?.id) {
        throw new Error("Unauthorized");
    };

    const res = await serverMutation('/api/startup/create', data, 'POST');
    revalidatePath('/dashboard/founder/my-startup');
    return res;
};