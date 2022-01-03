import { get } from "@/api/service.js";

export const fetchExchangeRates = async (currency) => {
  const response = await get({ base: currency });
  return response;
};
