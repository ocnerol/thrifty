import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.1.75:9000/api",
});

// to change implementation of the GET method for making a request to the API:
// e.g., to check the cache if there is no internet connection or if the request fails
const get = apiClient.get;
apiClient.get = () => {
  // do something before
  get();
  // do something after
};

export default apiClient;
