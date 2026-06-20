"use server";

import { revalidatePath } from "next/cache";
import { serverDelete } from "../core/server";
import { getUserSession } from "../core/session";

export const deleteStartupAction = async (id) => {
  const session = await getUserSession();
    if (!session?.user?.id || !session?.user?.role === 'founder') {
        throw new Error("Unauthorized");
    };

  const res = await serverDelete(`/api/startup/delete/${id}`);
  revalidatePath("/dashboard/founder");
  return res;
};