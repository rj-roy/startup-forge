'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";
import { getUserSession } from "../core/session";

export const createOpportunities = async (data) => {
    
    const session = await getUserSession();
    if (!session?.user?.id || !session?.user?.role === 'founder') {
        throw new Error("Unauthorized");
    };

    const res = await serverMutation('/api/opportunities/create', data, 'POST');
    revalidatePath('/dashboard/founder');
    return res;
};