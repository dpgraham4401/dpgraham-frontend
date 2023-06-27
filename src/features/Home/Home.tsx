import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { api } from "../../services";
import { Blog } from "../../types";
import DpgCard from "../../components/DpgCard";
import { Link } from "react-router-dom";
import DpgToast from "../../components/DpgToast";

interface Error {
  status?: number;
  data: string;
}

function Home() {
  const [blogs, setBlogs] = useState<Blog[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  useEffect(() => {
    setLoading(true);
    api
      .get("blog", null)
      .then((response) => {
        // ToDo: move this logic to services dir
        if (response.status === 200) {
          let recentBlogs = response.data as Blog[];
          recentBlogs = recentBlogs.slice(0, 3);
          setBlogs(recentBlogs);
        } else {
          setError({ status: response.status, data: response.data });
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError({ data: error });
        console.error(error);
      });
  }, []);

  return (
    <>
      <Container>
        <DpgCard>
          <DpgCard.Header title="Recent Articles" />
          <DpgCard.Body>
            {loading ? (
              <DpgCard.Spinner
                title={
                  error
                    ? error.data
                    : "sorry, we're experiencing technical issues"
                }
              />
            ) : blogs ? (
              listArticles(blogs)
            ) : (
              "error"
            )}
          </DpgCard.Body>
        </DpgCard>
      </Container>
    </>
  );
}

function listArticles(blogs: Blog[]) {
  if (blogs.length === 0 || undefined) {
    return <></>;
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

export default Home;
