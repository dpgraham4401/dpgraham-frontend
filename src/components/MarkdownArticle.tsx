import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, Container } from "@mui/material";
import { DpgMarkdown } from "components/DpgMarkdown";
import { Article } from "features/Articles";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "services";

export function MarkdownArticle() {
  const { id } = useParams();
  const [article, loading, error] = useQuery<Article>(`blog/${id}`);

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
