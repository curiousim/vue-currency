export const EXCHANGE_SERVICE_URL = process.env.VUE_APP_BASE_URL;

export const get = async (params) => {
  // url would be an argument if had several endpoints
  const url = new URL(EXCHANGE_SERVICE_URL);
  url.search = new URLSearchParams(params).toString();

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(url.toString() + ": ", error);
  }
};
