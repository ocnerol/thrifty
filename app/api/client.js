import { create } from 'apisauce';
import cache from '../utility/cache';

const apiClient = create({
  baseURL: `http://${process.env.DEV_IP}:9000/api`,
});

// to change implementation of the GET method for making a request to the API:
// e.g., to check the cache if there is no internet connection or if the request fails
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
