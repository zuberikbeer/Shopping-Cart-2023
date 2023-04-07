import { Button, Form, Modal } from "react-bootstrap";
import { signUp } from "../services/AccountApiService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../models/Account";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
}

const SignUpUser = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const redirectToLogin = () => {
    setShowModal(false);
    navigate("/login");
  };

  const [formData, setFormData] = useState<FormData>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Add basic validation (you should improve this)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newAccount: Account = {
      profilePic: "",
      email: formData.email,
      password: formData.password,
      userName: formData.userName,
      initalSetUp: true, // Set an appropriate value for initalSetUp
    };

    try {
      await signUp(newAccount);
      setShowModal(true);
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="signUpUser">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <Modal show={showModal} onHide={redirectToLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>Registration successful</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={redirectToLogin}>
            Go to Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignUpUser;
