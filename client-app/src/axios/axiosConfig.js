import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_MAIN_API,
  headers: {
    "Content-Type": "application/json",
  },
});

//Xử lý trước khi gửi request
axiosInstance.interceptors.request.use(
  async (config) => {
    if (
      config.url.indexOf("user/login") >= 0 ||
      config.url.indexOf("user/register") >= 0 ||
      config.url.indexOf("refreshToken") >= 0
    ) {
      return config;
    }
    const accessToken = localStorage.getItem(process.env.REACT_APP_TOKEN);
    if (accessToken) {
      config.headers["X-Token"] = accessToken;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//Xử lý sau khi có response
axiosInstance.interceptors.response.use(
  async (response) => {
    const config = response.config;
    //Nhung router khong can check token
    if (
      config.url.indexOf("user/login") >= 0 ||
      config.url.indexOf("user/register") >= 0 ||
      config.url.indexOf("refreshToken") >= 0
    ) {
      return response;
    }
    if (response.data.messenger === "Token het han") {
      //get refesh Token
      const refreshToken = await axiosInstance.get("refreshToken");
      const { token } = refreshToken.data;
      if (token) {
        config.headers["X-Token"] = token;
        localStorage.setItem(process.env.REACT_APP_TOKEN, token);
        return axiosInstance(config);
      }
    }
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
