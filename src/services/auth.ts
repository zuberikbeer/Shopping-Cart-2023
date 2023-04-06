import axios from "axios";

const API_URL = "http://localhost:5000"; // Replace this with the URL of your backend server

export const register = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const googleSignIn = async (tokenId: string) => {
  const response = await axios.post(`${API_URL}/googleSignIn`, { tokenId });
  return response.data;
};
