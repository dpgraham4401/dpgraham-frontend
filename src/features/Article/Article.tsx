import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services";
import { Blog } from "types";
import DpgMarkdown from "../../components/DpgMarkdown";

function Article() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [article, setArticle] = useState<Blog | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    api
      .get(`blog/${id}`, null)
      .then((response) => {
        setArticle(response.data as Blog);
      })
      .then(() => setLoading(false));
  }, [id]);

  return (
    <>
      <Container>
        <Card>
          <CardContent>
            {loading ? (
              <h1 className="d-flex justify-content-center bg-transparent py-3">
                <FontAwesomeIcon
                  className="fa-spin text-muted"
                  icon={faCircleNotch}
                />
              </h1>
            ) : article ? (
              <DpgMarkdown article={article} />
            ) : (
              "ERROR: We're sorry, we're having trouble fetching this article."
            )}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Article;
