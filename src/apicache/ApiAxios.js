import axios from "axios";
// const axios = require("axios").default;
export { axios };
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
// axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
export const authAxios = axios;

// Course List
export const courseListAPIs = {
  getCourseListAxios(limit, offset) {
    return authAxios.get(
      `/coursesearch/?limit=${limit ? limit : "20"}&offset=${
        offset && offset ? offset : "1"
      }&searchQuery=`
    );
  },
};
