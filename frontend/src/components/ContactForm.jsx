import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import "../styles/Form.css";
import api from "../api.js";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import Alert from "react-bootstrap/Alert";  // Use react-bootstrap Alert

function ContactForm({route}) {
  const [fname, setFirstname] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);  // Track messages for success/error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
         await api.post(route, { fname, lname, email, content });
        setMessage({ type: "success", text: "Contact Form submitted successfully!" });
        setTimeout(() => navigate("/"), 2000); // Navigate after 2 seconds
    } catch (error) {
        console.error("Error:", error.response); 
        setMessage({ type: "danger", text: "Failed to submit Contact Form." });
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="form-container form-spacing">
      {/* Display success/error message */}
      {message && <Alert variant={message.type}>{message.text}</Alert>}  
      
      <Form onSubmit={handleSubmit}>
        <div className="border">
          <Form.Group className="mb-3" controlId="floatingFname">
            <Form.Label>First Name</Form.Label>
            <FloatingLabel controlId="floatingFname" label="First Name">
              <Form.Control
                type="text"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="floatingLname">
            <Form.Label>Last Name</Form.Label>
            <FloatingLabel controlId="floatingLname" label="Last Name">
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLastName(e.target.value)}
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

          <Form.Group className="mb-3" controlId="floatingContent">
            <Form.Label>Content</Form.Label>
            <FloatingLabel controlId="floatingContent" label="Content">
              <Form.Control
                as="textarea"  // Set as textarea to handle multiple lines
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          {loading && <LoadingIndicator />}
          <Button variant="primary" type="submit" disabled={loading}>
            {"Submit"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;