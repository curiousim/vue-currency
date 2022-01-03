export const EXCHANGE_SERVICE_URL = "https://api.exchangerate.host/latest";

export const get = async (params) => {
  // that would be an argument if had several endpoints
  const url = new URL(EXCHANGE_SERVICE_URL);
  url.search = new URLSearchParams(params).toString();

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(url.toString() + ": ", error);
  }
};
