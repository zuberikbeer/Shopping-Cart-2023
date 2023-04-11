export default interface Account {
  _id?: string;
  profilePic?: string;
  userName?: string;
  email: string;
  password: string;
  uid?: string;
  initalSetUp?: true;
}
