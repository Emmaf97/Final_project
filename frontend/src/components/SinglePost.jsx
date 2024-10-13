import React from "react";
import "../styles/Post.css"
import { Card } from "react-bootstrap";
import {  Button } from "react-bootstrap";


function SinglePost({ post, onDelete }) {

    console.log('Post:', post); // Add this line to check the post data
    if (!post) {
        return <p>No post data available.</p>; // Handle the case where post is undefined
    }

    const formattedDate = new Date(post.created_at).toLocaleDateString("en-US")

  
  return (
    <Card className="text-center mb-3 shadow bg-ligh text-dark">
    <Card.Header as="h5">{post.title}</Card.Header>
    <Card.Body>
      <Card.Title>{post.content}</Card.Title>
    <Button variant="danger" onClick={() => onDelete(post.id)}>
      Delete
    </Button>
    </Card.Body>
    <Card.Footer className="text-muted">{formattedDate}</Card.Footer>
</Card>

  );
}

export default SinglePost