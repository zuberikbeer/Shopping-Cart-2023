import axios from "axios";
import Account from "../models/Account";

//stores base URL
const baseUrl: string = process.env.REACT_APP_API_BASE_URL || "";

// creates a new account for a user in the database
export const createNewAccount = (account: Account): Promise<Account> => {
  return axios
    .post(`${baseUrl}/account/addAccount`, account)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

// retrieves a specific users account data from the database
export const getUserData = (uid: string): Promise<Account> => {
  return axios
    .get(`${baseUrl}/account/user/${uid}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

//updates the details of a users account in the database
export const updateAccountDetails = (account: Account): Promise<Account> => {
  return axios
    .put(`${baseUrl}/account/${account._id}`, account)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
