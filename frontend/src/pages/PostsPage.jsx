import { useState, useEffect } from "react";
import api from "../api";
import SinglePost from "../components/SinglePost";
import { Form, Button } from "react-bootstrap";
import "../styles/Home.css";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    api
      .get("/api/posts/")
      .then((res) => res.data)
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deletePost = (id) => {
    api
      .delete(`/api/posts/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert("Post deleted!");
          getPosts();
        } else {
          alert("Failed to delete post.");
        }
      })
      .catch((error) => alert(error));
  };

  const creatPost = (e) => {
    e.preventDefault();
    api
      .post("/api/posts/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          alert("Post Created!");
          setTitle("");
          setContent("");
          getPosts();
        } else {
          setError("Failed to create post");
        }
      })
      .catch((error) => {
        setError("Failed to create post");
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Create a Post</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form onSubmit={creatPost}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title of Post"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content of Post</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h2>Posts</h2>
      {posts.map((post) => (
        <SinglePost post={post} onDelete={deletePost} key={post.id} />
      ))}
    </div>
  );
}

export default PostsPage;
