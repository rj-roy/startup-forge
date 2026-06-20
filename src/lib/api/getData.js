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
  const startups = await serverFetch(`/api/startups/founder/${id}/count`);
  return startups;
};