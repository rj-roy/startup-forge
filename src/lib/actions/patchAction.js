'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";
import { getUserSession } from "../core/session";

export const patchAction = async (id, data, path, revPath, role) => {
    const session = await getUserSession();
    if (!session?.user?.id || session?.user?.role !== role) {
        throw new Error("Unauthorized");
    };
    
    const res = await serverMutation(`${path}/${id}`, data, 'PATCH');
    if(path === '/api/user/plan/update'){
        return res;
    };
    
    revalidatePath(`${revPath}` || '/dashboard');
    return res;
};