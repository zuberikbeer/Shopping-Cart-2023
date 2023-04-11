import axios, { AxiosError } from "axios";
import Account from "../models/Account";

//stores base URL
const baseUrl: string = process.env.REACT_APP_API_BASE_URL || "";

// retrieves a specific users account data from the database
export const getUserData = (uid: string): Promise<Account> => {
  return axios
    .get(`${baseUrl}/account/${uid}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

// creates a new account for a user in the database
export const createNewAccount = (account: Account): Promise<Account> => {
  return axios
    .post(`${baseUrl}/account`, account)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

// Send a signup request to the backend
export const signUp = async (account: Account): Promise<void> => {
  try {
    await axios.post(`${baseUrl}/account/addAccount`, account);
  } catch (error) {
    console.error("Error during sign-up:", error);
  }
};

// Send a sign-in request to the backend
export const signIn = async (account: Account): Promise<Account> => {
  try {
    const response = await axios.post(`${baseUrl}/account/login`, account);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error during sign-in:", error.response);

      // Check if the error response contains a message
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Error during sign-in");
      }
    } else {
      console.error("Error during sign-in:", error);
      throw new Error("Invalid email or password");
    }
  }
};
//* deletes user from database
// export const deleteAccount = (id: string): Promise<Account> => {
//   return axios
//     .delete(`${baseUrl}/account/${id}`)
//     .then((res) => res.data)
//     .catch((err) => console.log(err));
// };
