import { serverFetch } from "../core/server";

export const getDataByCollection = async (path) => {
  const data = await serverFetch(`${path}`);
  return data;
};

export const getStartupsByStatus = async (status) =>{
  const startups = await serverFetch(`/api/startups/${status}`)
  return startups;
};

export const getDataById = async (id, path)=>{
  const data = await serverFetch(`${path}/${id}`);
  return data;
};

export const getStartupsFiled = async (field) => {
    return serverFetch(`/api/startups/field?field_name=${field}`);
};