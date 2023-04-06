import axios from "axios";

const baseUrl: string = process.env.REACT_APP_API_BASE_URL || "";

export const getShoppingCartItems = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/shopping-cart`);
    return response.data;
  } catch (error) {
    console.error("Error fetching shopping cart items:", error);
    throw error;
  }
};
