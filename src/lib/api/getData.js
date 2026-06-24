import { protectedFetch, serverFetch } from "../core/server";

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


// protected fetch
export const getPrDataByCollection = async (path) => {
  const data = await protectedFetch(`${path}`);
  return data;
};

export const getPrStartupsByStatus = async (status) =>{
  const startups = await protectedFetch(`/api/startups/${status}`)
  return startups;
};

export const getPrDataById = async (id, path)=>{
  const data = await protectedFetch(`${path}/${id}`);
  return data;
};

export const getPrStartupsFiled = async (field) => {
    return protectedFetch(`/api/startups/field?field_name=${field}`);
};

// opportunities by startup_id protectedFetch