'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";
import { getUserSession } from "../core/session";

export const createApplications = async (data) => {
    
    const session = await getUserSession();
    if (!session?.user?.id || !session?.user?.role === 'collaborator') {
        throw new Error("Unauthorized");
    };

    const res = await serverMutation('/api/opportunity/application/create', data, 'POST');
    revalidatePath('/dashboard/collaborator/application');
    return res;
};