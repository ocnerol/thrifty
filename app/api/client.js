import { create } from "apisauce";

const apiClient = create({
  baseURL: '"http://104.205.47.132:9000/api"',
});

apiClient.get("/listings").then((response) => {
  if (!response.ok) {
    response.problem;
  }
});
