'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

export const createStartup = async (data) =>{
    const res = await serverMutation('/api/startup/create', data, 'POST');
    revalidatePath('/dashboard/founder/my-startup');
    return res;
};