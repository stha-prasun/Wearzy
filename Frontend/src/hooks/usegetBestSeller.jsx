import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setBestSeller } from "../redux/bestSeller";
import { BESTSELLER_API_ENDPOINT } from "../utils/constants";

const usegetBestSeller = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await axios.get(
          `${BESTSELLER_API_ENDPOINT}/get`
        );
        if (response.data?.success) {
          dispatch(setBestSeller(response?.data?.bestSellers));
        }
      } catch (error) {
        console.error("Failed to fetch best sellers:", error);
      }
    };

    fetchBestSellers();
  }, []);
};

export default usegetBestSeller;
