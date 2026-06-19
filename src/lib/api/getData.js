import { serverFetch } from "../core/server";

export const getStartups = async () => {
  const startups = await serverFetch('/api/startups');
  return startups;
};
