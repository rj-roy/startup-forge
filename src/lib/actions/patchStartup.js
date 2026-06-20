'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";
import { getUserSession } from "../core/session";

export const patchStartup = async (id, data) => {
    const session = await getUserSession();
    if (!session?.user?.id) {
        throw new Error("Unauthorized");
    };
    
    const res = await serverMutation(`/api/startup/${id}`, data, 'PATCH');
    revalidatePath('/dashboard/founder/manage-startup');
    return res;
};