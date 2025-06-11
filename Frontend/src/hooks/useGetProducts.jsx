import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { PRODUCT_API_ENDPOINT } from "../utils/constants";
import { setProducts } from "../redux/Products";

const useGetProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${PRODUCT_API_ENDPOINT}/getallproducts`
        );
        if (response.data?.success) {
          dispatch(setProducts(response?.data?.products));
        }
      } catch (error) {
        console.error("Failed to fetch best sellers:", error);
      }
    };

    fetchProducts();
  }, []);
}

export default useGetProducts
