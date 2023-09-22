import { Card, CardContent, CircularProgress, Container } from "@mui/material";
import { DpgPageError } from "components/DpgError";
import { DpgMarkdown } from "components/DpgMarkdown";
import { Article } from "features/Articles";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "services";

export function MarkdownArticle() {
  const { id } = useParams();
  const [article, loading, error] = useQuery<Article>(`article/${id}`);

  if (error) {
    return <DpgPageError statusCode={404} message={error.message} />;
  }

  return (
    <>
      <Container>
        <Card>
          <CardContent>
            {loading ? (
              <h1 className="d-flex justify-content-center bg-transparent py-3">
                <CircularProgress />
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
