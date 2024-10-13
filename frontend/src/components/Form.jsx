import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import "../styles/Form.css";
import api from "../api.js";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";
import { Alert } from "react-bootstrap";

function AuthForm({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      if (method === "register") {
        // Attempt to register the user
        const registerResponse = await api.post(route, {
          username,
          email,
          password,
        });
        setMessage({ type: "success", text: "Account Created!" });

        // Automatically log the user in after successful registration
        const loginRes = await api.post("/api/token/", { username, password });
        localStorage.setItem(ACCESS_TOKEN, loginRes.data.access);
        localStorage.setItem(REFRESH_TOKEN, loginRes.data.refresh);
      } else if (method === "login") {
        // Log in the user
        const loginResponse = await api.post("/api/token/", {
          username,
          password,
        });
        if (loginResponse.status === 200) {
          const { access, refresh } = loginResponse.data;
          localStorage.setItem(ACCESS_TOKEN, access);
          localStorage.setItem(REFRESH_TOKEN, refresh);

          // Optionally fetch user data here if needed
          const userResponse = await api.get("/api/profile/", {
            headers: { Authorization: `Bearer ${access}` },
          });
          // Refresh the page to update the UI
          navigate("/");
          window.location.reload();

          // Compare the fetched user data with the input
          if (
            userResponse.data.username === username &&
            userResponse.data.email === email
          ) {
            setMessage({ type: "success", text: "Successfully Logged In!" });
          } else {
            throw new Error("Login failed: user data mismatch.");
          }
        }
      }
    } catch (error) {
      console.error("Error:", error.response);
      setMessage({
        type: "danger",
        text:
          error.response?.data?.detail || "Failed to create account or log in.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container form-spacing">
      {message && <Alert variant={message.type}>{message.text}</Alert>}
      <h1>{name}</h1>
      <Form onSubmit={handleSubmit}>
        <div className="border">
          <Form.Group className="mb-3" controlId="floatingUsername">
            <Form.Label>UserName</Form.Label>
            <FloatingLabel controlId="floatingUsername" label="Username">
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          {method === "register" && (
            <Form.Group className="mb-3 FormStyle" controlId="floatingEmail">
              <Form.Label>Email address</Form.Label>
              <FloatingLabel controlId="floatingEmail" label="Email">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
              <Form.Text className="text-muted-custom">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="floatingPassword">
            <Form.Label>Password</Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          {loading && <LoadingIndicator />}
          <Button variant="primary" type="submit" disabled={loading}>
            {name}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AuthForm;
