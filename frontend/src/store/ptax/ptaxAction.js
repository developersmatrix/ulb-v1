import axios from "axios";

import { addPtax } from "./ptaxSlice";

export const getPtaxCollection = (data) => {
  return async (dispatch) => {
    const getPtax = async () => {
      const url = "http://localhost:8080/dcb/property-tax";
      const params = new URLSearchParams();
      params.append("collectionType", data.collectionType);
      params.append("startYear", data.startYear);

      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const response = await axios.post(url, params, config);
      console.log(response.data);

      if (response.status !== 200) {
        throw new Error("Failed loading Ptax data");
      }

      return response.data;
    };

    try {
      const ptaxData = await getPtax();
      dispatch(addPtax(...ptaxData));
    } catch (error) {
      console.log(error.message);
    }
  };
};
