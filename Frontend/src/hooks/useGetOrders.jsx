import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ORDER_API_ENDPOINT } from "../utils/constants";
import { setOrders } from "../redux/orders";

const useGetOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${ORDER_API_ENDPOINT}/get/all`);
        if (response.data?.success) {
          dispatch(setOrders(response?.data?.orders));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);
};

export default useGetOrders;
