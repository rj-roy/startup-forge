'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

export const patchStartup = async (id, data) => {
    const res = await serverMutation(`/api/startup/${id}`, data, 'PATCH');
    revalidatePath('/dashboard/founder/manage-startup');
    return res;
};