import { serverFetch } from "../core/server";

export const getStartups = async () => {
  const startups = await serverFetch('/api/startups');
  return startups;
};

export const getStartupById = async (id) => {
  const startup = await serverFetch(`/api/startups/${id}`);
  return startup;
};

export const getStartupByFounderId = async (id) => {
  const startups = await serverFetch(`/api/startups/founder/${id}`);
  return startups;
};

export const getStartupsFiled = async (field) => {
    return serverFetch(`/api/startups/field?field_name=${field}`);
};

export const getOpportunitesByFounderId = async (id) => {
  const opportunities = await serverFetch(`/api/opportunities/founder/${id}`);
  return opportunities;
};