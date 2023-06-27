import React, { useEffect, useState } from "react";
import { api } from "../../services";
import { Blog } from "types";
import { Link } from "react-router-dom";
import { Card, CardContent, Container } from "@mui/material";

function BlogHome() {
  const [blogs, setBlogs] = useState<Blog[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  useEffect(() => {
    setLoading(true);
    api
      .get("blog", null)
      .then((response) => {
        if (response.status === 200) {
          setBlogs(response.data as Blog[]);
        } else {
          setError(response.data);
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);
  return (
    <>
      <Container>
        <Card>
          <CardContent>
            {loading ? <p>loading</p> : blogs ? listArticles(blogs) : "error"}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

function listArticles(blogs: Blog[]) {
  if (blogs.length === 0 || undefined) {
    return <div></div>;
  }
  return blogs.map((blog: Blog, i: number) => {
    return (
      <div key={i}>
        <Link to={`/blog/${blog.id}`} className="h3 text-decoration-none">
          {blog.title}
        </Link>
        <p className="ms-2 mb-0 text-muted">{blog.createDate}</p>
        <p className="mt-0">
          {blog.content}
          <span>
            <Link className="text-decoration-none" to={`/blog/${blog.id}`}>
              {"read more..."}
            </Link>
          </span>
        </p>
      </div>
    );
  });
}

export default BlogHome;
