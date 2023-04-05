import shoppingCartItem from "./shoppingCartItem";

export default interface Account {
  _id?: string;
  profilePic?: string;
  userName: string;
  email: string;
  password?: string;
  shoppingCart?: shoppingCartItem[];
  orderTotal?: number;
  shippingAddress?: string;
  uid: string;
  initalSetUp: true;
}
