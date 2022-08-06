import axios from "axios";

const myApi = axios.create({
  baseURL: "http://localhost:5000/donateFor",
  responseType: "json",
});

export default {
  async getDonateForData() {
    try {
      const response = await myApi.get("");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getIdDonateForData(id: string) {
    try {
      const response = await myApi.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
