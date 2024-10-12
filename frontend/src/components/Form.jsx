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

function AuthForm({ route, method, onSuccessfulAuth  }) {
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
            // Register or login the user
            await api.post(route, { username, email, password });

            setMessage({ type: "success", text: method === "register" ? "Account Created!" : "Successfully Logged In!" });
            
            if (method === "register") {
                // Automatically log the user in after successful registration
                const loginRes = await api.post("/api/token/", { username, password });
                localStorage.setItem(ACCESS_TOKEN, loginRes.data.access);
                localStorage.setItem(REFRESH_TOKEN, loginRes.data.refresh);
                // Refresh the page to update the UI
                window.location.reload();
            } else if (method === "login") {
                // For login, directly store the tokens from the response
                const loginRes = await api.post("/api/token/", { username, password });
                localStorage.setItem(ACCESS_TOKEN, loginRes.data.access);
                localStorage.setItem(REFRESH_TOKEN, loginRes.data.refresh);
                // Refresh the page to update the UI
                window.location.reload();
                
            }
            // Notify parent component to fetch user info
            if (onSuccessfulAuth) {
                onSuccessfulAuth(); // This will call fetchUserInfo in the parent
            }
    
            setMessage({ type: "success", text: "Account Created!" });
    
            // Navigate after a short delay
            setTimeout(() => navigate("/"), 2000);
        } catch (error) {
            console.error("Error:", error.response);
            setMessage({ type: "danger", text: "Failed to Create Account." });
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
