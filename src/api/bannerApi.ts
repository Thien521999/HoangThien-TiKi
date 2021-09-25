// libs
import axiosClient from "./axiosClient";

const bannerApi = {
  getAll() {
    const url = "/v2/widgets/banners_home";
    return axiosClient.get(url); 
  },
};

export default bannerApi;
