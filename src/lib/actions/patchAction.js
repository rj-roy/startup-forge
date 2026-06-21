'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";
import { getUserSession } from "../core/session";

export const patchAction = async (id, data, path, revPath) => {
    const session = await getUserSession();
    if (!session?.user?.id || session?.user?.role !== 'founder') {
        throw new Error("Unauthorized");
    };
    
    const res = await serverMutation(`${path}/${id}`, data, 'PATCH');
    revalidatePath(`${revPath}` || '/dashboard');
    return res;
};