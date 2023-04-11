import { Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Account from "../models/Account";

const LoginUser = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/home");
  };

  const [loginForm, setLoginForm] = useState<Account>({
    email: "",
    password: "",
  });

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Submitting login form", loginForm);
    try {
      await login(loginForm.email, loginForm.password);
      console.log("Login successful");

      redirectToHome();
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };

  return (
    <div className="loginUser">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicLoginEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="email"
            value={loginForm.email}
            onChange={handleLoginChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginUser;
