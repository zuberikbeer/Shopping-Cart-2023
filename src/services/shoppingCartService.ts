import axios from "axios";

export const getShoppingCartItems = async () => {
  try {
    const response = await axios.get("/api/shopping-cart");
    return response.data;
  } catch (error) {
    console.error("Error fetching shopping cart items:", error);
    throw error;
  }
};
