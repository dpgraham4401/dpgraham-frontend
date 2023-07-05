import { CircularProgress, Container, Grid } from "@mui/material";
import { ArticlesGrid } from "components/ArticlesOverview/ArticlesGrid";
import { DpgPageError } from "components/DpgError";
import { Article } from "features/Articles";
import React, { useEffect, useState } from "react";
import { api } from "services";

export function ArticlesOverview() {
  const [articles, setArticles] = useState<Article[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  useEffect(() => {
    setLoading(true);
    api
      .get("blog", null)
      .then((response) => {
        if (response.status === 200) {
          setArticles(response.data as Article[]);
        } else {
          setError(response.data);
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  if (error) {
    return <DpgPageError statusCode={404} message={error.message} />;
  }

  return (
    <>
      <Container>
        <Grid container spacing={6} justifyContent="center">
          {loading ? (
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "100px",
              }}
            >
              <CircularProgress size={100} />
            </Container>
          ) : articles ? (
            <ArticlesGrid articles={articles} />
          ) : (
            <p>error</p>
          )}
        </Grid>
      </Container>
    </>
  );
}
