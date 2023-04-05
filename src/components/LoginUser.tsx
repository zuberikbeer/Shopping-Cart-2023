import { Button, Form } from "react-bootstrap";
import LoginData from "../models/LoginData";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { signIn } from "../services/AccountApiService";

const LoginUser = () => {
  const { user } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState<LoginData>({
    loginEmailOrUsername: "",
    loginPassword: "",
  });

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const account = await signIn({
        loginEmailOrUsername: loginForm.loginEmailOrUsername,
        loginPassword: loginForm.loginPassword,
      });
      console.log("Login successful:", account);
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };

  return (
    <div className="loginUser">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicLoginEmailOrUserName">
          <Form.Label>Email or Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email or username"
            name="loginEmailOrUsername"
            value={loginForm.loginEmailOrUsername}
            onChange={handleLoginChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="loginPassword"
            value={loginForm.loginPassword}
            onChange={handleLoginChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {user ? (
        <div>
          <p>{user.displayName}</p>
          <Button onClick={signOut}>Sign Out</Button>
        </div>
      ) : (
        <Button onClick={signInWithGoogle}>Sign In With Google</Button>
      )}
    </div>
  );
};

export default LoginUser;
