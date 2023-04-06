import axios from "axios";

const baseUrl: string = process.env.REACT_APP_API_BASE_URL || "";

export const register = async (email: string, password: string) => {
  const response = await axios.post(`${baseUrl}/register`, { email, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${baseUrl}/login`, { email, password });
  return response.data;
};

export const googleSignIn = async (tokenId: string) => {
  const response = await axios.post(`${baseUrl}/googleSignIn`, { tokenId });
  return response.data;
};
