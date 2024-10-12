import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import img1 from "../images/Dullahan.png";
import { ACCESS_TOKEN } from "../constants";
import axios from "axios";
import "../styles/App.css";
import "../styles/form.css";

function ProfileUpdate() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({});

  // Fetch user info on mount
  useEffect(() => {
    const fetchUserData = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            try {
                const response = await axios.get("/api/profile/", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                // Set user data directly
                setUser(response.data);
                // Set individual states if needed
                setUsername(response.data.username);
                setEmail(response.data.email);
                setProfileImage(response.data.profile_image); // Ensure this matches your backend field
            } catch (error) {
                console.error("Failed to fetch user data", error);
            }
        }
    };
    fetchUserData();
}, []);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    const previewImage = URL.createObjectURL(e.target.files[0]);
    setUser({ ...user, profile_image: previewImage });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    if (profileImage) formData.append("profile_image", profileImage);
  
    try {
      const token = localStorage.getItem(ACCESS_TOKEN);
      console.log("Token", token);
      if (token) {
        console.log("before patch");
        console.log("FormData:", formData);
        const response = await axios.patch("/api/profile/update/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("After Patch");
        console.log("Response:", response.data); // Log the response for debugging
        
        // Update the user state with the new data from response
        // setUser({
        //     ...user,
        //     username,
        //     email,
        //     profile_image: response.data.profile_image, // Ensure this points to the new image
        //   });
        
          setMessage("Profile updated successfully!");
          const res = await axios.get("/api/profile/", {
            headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      }
    } catch (error) {
      setMessage("Failed to update profile.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={6} md={3}>
          <Image
            src={user.profile_image ? user.profile_image : img1 }
            alt="Profile"
            thumbnail
            roundedCircle
          />
          <h1>{user.username ? `Profile of ${user.username}` : "Profile"}</h1>
        </Col>
      </Row>
      <Row>
        <Form className="form-spacing" onSubmit={handleSubmit}>
          <div className="border">
            <Form.Group className="mb-3" controlId="floatingUsername">
              <Form.Label>Username</Form.Label>
              <FloatingLabel controlId="floatingUsername" label="Username">
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
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
                  disabled={loading}
                />
              </FloatingLabel>
              <Form.Text className="text-muted-custom">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <div>
                <label htmlFor="profileImage">Upload Profile Picture</label>
                <input
                  type="file"
                  id="profileImage"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update"}
            </Button>
            {message && (
  <Alert variant={message.includes("success") ? "success" : "danger"} dismissible onClose={() => setMessage("")}>
    {message}
  </Alert>
)}
          </div>
        </Form>
      </Row>
    </Container>
  );
}

export default ProfileUpdate;
