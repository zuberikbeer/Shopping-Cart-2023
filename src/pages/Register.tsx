import { Stack, Tab, Tabs } from "react-bootstrap";
import SignUpUser from "../components/SignUpUser";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [key, setKey] = useState("home");

  const navigate = useNavigate();

  const handleTabSelect = (selectedKey: string | null) => {
    if (selectedKey === "login") {
      navigate("/login");
    }
  };

  return (
    <Tabs
      id="controlled-tab"
      onSelect={handleTabSelect}
      activeKey={key}
      className="mb3"
    >
      <Tab eventKey="login" title="Login"></Tab>
      <Tab eventKey="home" title="Sign-Up">
        <Stack>
          <SignUpUser />
        </Stack>
      </Tab>
    </Tabs>
  );
};

export default Register;
