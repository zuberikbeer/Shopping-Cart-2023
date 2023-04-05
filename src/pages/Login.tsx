import { Stack, Tab, Tabs } from "react-bootstrap";

import LoginUser from "../components/LoginUser";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleTabSelect = (selectedKey: string | null) => {
    if (selectedKey === "Sign-Up") {
      navigate("/register");
    }
  };
  return (
    <Tabs id="controlled-tab" onSelect={handleTabSelect} className="mb3">
      <Tab eventKey="home" title="Login">
        <Stack>
          <LoginUser />
        </Stack>
      </Tab>
      <Tab eventKey="Sign-Up" title="Sign-Up"></Tab>
    </Tabs>
  );
}
