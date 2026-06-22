"use server";

import { revalidatePath } from "next/cache";
import { serverDelete } from "../core/server";
import { getUserSession } from "../core/session";

export const deleteAction = async (path, id, revPath, role) => {
  const session = await getUserSession();
    if (!session?.user?.id || session?.user?.role !== role) {
        throw new Error("Unauthorized");
    };

  const res = await serverDelete(`${path}/${id}`);
  revalidatePath(`${revPath}` || "/dashboard");
  return res;
};