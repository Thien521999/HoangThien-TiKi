import axiosClient from "./axiosClient";

const ProductApi = {
  getAll(params:any) {
    const url = "/personalish/v1/blocks/listings";
    return axiosClient.get(url, { params });
  },

  getFashSaleBook(params:any) {
    const url = "/personalish/v1/blocks/listings";
    return axiosClient.get(url, { params });
  }
};

export default ProductApi;
