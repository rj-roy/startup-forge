import { serverFetch } from "../core/server";

export const getStartupsFiled = async (field) => {
    return serverFetch(`/api/startups/field?field_name=${field}`);
};