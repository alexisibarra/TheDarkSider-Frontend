import AXIOS from "../config/AxiosConfig";

const BASE_URI = "/Users";

export default {
  create: (token, payload) => {
    return AXIOS.post(`${BASE_URI}`, payload, {
      headers: { Authorization: `Bearer ${token}` }
    });
  },
  login: payload => {
    return AXIOS.post(`${BASE_URI}/login`, payload);
  },
  getInfo: (token, id) => {
    return AXIOS.get(`${BASE_URI}/${id}`, {
      headers: { Authorization: `${token}` }
    });
  },
  count: _ => AXIOS.get(`${BASE_URI}/count`)
};
